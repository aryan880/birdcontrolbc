export type MediaAsset = {
  src: string;
  alt: string;
  caption?: string;
  kind?: "before" | "after" | "detail" | "overview";
};

export type SeoFields = {
  title: string;
  description: string;
};

export type ContentPoint = {
  title: string;
  description: string;
};

export type ContentStep = {
  title: string;
  description: string;
};
