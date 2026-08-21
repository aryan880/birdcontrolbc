/**
 * Keep legacy Pigeon Defenders paths documented until DNS and the old domain
 * are ready for the production 301 migration. These redirects are safe to
 * enable for same-host legacy paths now and can be mirrored at the old host.
 */
export const legacyRedirects = [
  { source: "/index.html", destination: "/" },
  { source: "/balcony-bird-netting.html", destination: "/services/balcony-bird-netting" },
  { source: "/pigeon-spike-installation.html", destination: "/services/bird-spike-installation" },
  { source: "/balcony-cleaning.html", destination: "/services/pigeon-dropping-cleaning" },
  { source: "/pet-cat-netting.html", destination: "/services/bird-deterrents" },
  { source: "/commercial-bird-control.html", destination: "/services/commercial-bird-control" },
  { source: "/service-areas.html", destination: "/service-areas" },
  { source: "/contact.html", destination: "/contact" },
  { source: "/projects/burnaby-cleanup-project", destination: "/projects/vancouver-balcony-cleanup-project" },
] as const;
