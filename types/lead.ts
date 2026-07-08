export type QuoteLeadPayload = {
  name: string;
  phone: string;
  email: string;
  propertyAddress?: string;
  city: string;
  serviceNeeded: string;
  propertyType: string;
  message: string;
  consent: boolean;
  photoNames: string[];
};
