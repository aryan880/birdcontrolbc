export type TrustBadge = {
  label: string;
  detail: string;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  source: string;
  placeholder?: boolean;
};

export type ReviewHighlight = {
  label: string;
  value: string;
  detail: string;
  placeholder?: boolean;
};
