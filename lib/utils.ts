export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function isInternalHref(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}
