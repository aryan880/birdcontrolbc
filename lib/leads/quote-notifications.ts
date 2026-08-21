import type { QuoteLeadPayload } from "@/types/lead";

export type QuoteAttachment = {
  filename: string;
  content: string;
};

type QuoteNotification = {
  lead: QuoteLeadPayload;
  attachments: QuoteAttachment[];
};

type NotificationResult = {
  emailSent: true;
  smsSent: boolean;
};

const requestTimeoutMs = 12_000;

export async function sendQuoteNotifications({
  lead,
  attachments,
}: QuoteNotification): Promise<NotificationResult> {
  await sendEmailNotification(lead, attachments);

  let smsSent = false;

  if (hasTwilioConfiguration()) {
    try {
      await sendSmsNotification(lead);
      smsSent = true;
    } catch (error) {
      // Email is the source-of-truth delivery channel; an optional SMS failure
      // should not make the visitor resubmit and create a duplicate lead.
      console.error("Quote SMS notification failed", error);
    }
  }

  return { emailSent: true, smsSent };
}

async function sendEmailNotification(
  lead: QuoteLeadPayload,
  attachments: QuoteAttachment[]
) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.QUOTE_FROM_EMAIL;
  const to = process.env.QUOTE_NOTIFICATION_EMAIL;

  if (!apiKey || !from || !to) {
    throw new QuoteDeliveryConfigurationError(
      "Email delivery is not configured. RESEND_API_KEY, QUOTE_FROM_EMAIL, and QUOTE_NOTIFICATION_EMAIL are required."
    );
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: lead.email,
      subject: `New quote request: ${lead.serviceNeeded} in ${lead.city}`,
      text: buildPlainTextEmail(lead),
      html: buildHtmlEmail(lead),
      attachments,
      tags: [
        { name: "form", value: "bird_control_quote" },
        { name: "source", value: sanitizeTagValue(lead.source) },
      ],
    }),
    signal: AbortSignal.timeout(requestTimeoutMs),
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Resend rejected the quote notification (${response.status}): ${details}`);
  }
}

async function sendSmsNotification(lead: QuoteLeadPayload) {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_FROM_NUMBER;
  const to = process.env.QUOTE_NOTIFICATION_PHONE;

  if (!accountSid || !authToken || !from || !to) {
    return;
  }

  const body = new URLSearchParams({
    From: from,
    To: to,
    Body: [
      "New Bird Control BC quote",
      `${lead.name} - ${lead.phone}`,
      `${lead.serviceNeeded} in ${lead.city}`,
      `Property: ${lead.propertyType}`,
      lead.photoNames.length
        ? `${lead.photoNames.length} photo(s) attached to the email.`
        : "No photos attached.",
    ].join("\n"),
  });

  const credentials = Buffer.from(`${accountSid}:${authToken}`).toString("base64");
  const response = await fetch(
    `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${credentials}`,
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body,
      signal: AbortSignal.timeout(requestTimeoutMs),
    }
  );

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Twilio rejected the quote notification (${response.status}): ${details}`);
  }
}

function hasTwilioConfiguration() {
  return Boolean(
    process.env.TWILIO_ACCOUNT_SID &&
      process.env.TWILIO_AUTH_TOKEN &&
      process.env.TWILIO_FROM_NUMBER &&
      process.env.QUOTE_NOTIFICATION_PHONE
  );
}

function buildPlainTextEmail(lead: QuoteLeadPayload) {
  return [
    "New Bird Control BC quote request",
    "",
    `Name: ${lead.name}`,
    `Phone: ${lead.phone}`,
    `Email: ${lead.email}`,
    `City: ${lead.city}`,
    `Property address: ${lead.propertyAddress || "Not provided"}`,
    `Service: ${lead.serviceNeeded}`,
    `Property type: ${lead.propertyType}`,
    `Source: ${lead.source}`,
    `Photos: ${lead.photoNames.length ? lead.photoNames.join(", ") : "None"}`,
    "",
    "Message:",
    lead.message,
  ].join("\n");
}

function buildHtmlEmail(lead: QuoteLeadPayload) {
  const rows = [
    ["Name", lead.name],
    ["Phone", lead.phone],
    ["Email", lead.email],
    ["City", lead.city],
    ["Property address", lead.propertyAddress || "Not provided"],
    ["Service", lead.serviceNeeded],
    ["Property type", lead.propertyType],
    ["Source", lead.source],
    ["Photos", lead.photoNames.length ? lead.photoNames.join(", ") : "None"],
  ];

  return `
    <div style="font-family:Arial,sans-serif;color:#132f29;line-height:1.55;max-width:680px">
      <h1 style="font-size:24px;margin:0 0 20px">New Bird Control BC quote request</h1>
      <table style="width:100%;border-collapse:collapse">
        ${rows
          .map(
            ([label, value]) => `
              <tr>
                <th style="text-align:left;vertical-align:top;padding:8px;border-bottom:1px solid #d8ddd5;width:160px">${escapeHtml(label)}</th>
                <td style="padding:8px;border-bottom:1px solid #d8ddd5">${escapeHtml(value)}</td>
              </tr>`
          )
          .join("")}
      </table>
      <h2 style="font-size:18px;margin:24px 0 8px">Message</h2>
      <p style="white-space:pre-wrap;margin:0">${escapeHtml(lead.message)}</p>
    </div>
  `;
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>'"]/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      })[character] ?? character
  );
}

function sanitizeTagValue(value: string) {
  const sanitized = value.replace(/[^a-zA-Z0-9_-]/g, "_").slice(0, 256);
  return sanitized || "quote_form";
}

export class QuoteDeliveryConfigurationError extends Error {}
