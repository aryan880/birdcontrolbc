import Image from "next/image";

import type { MediaAsset } from "@/types/content";

type ProjectGalleryProps = {
  images: MediaAsset[];
};

export function ProjectGallery({ images }: ProjectGalleryProps) {
  if (!images.length) {
    return null;
  }

  return (
    <div
      id="project-gallery"
      className="section-grid-balanced sm:grid-cols-2"
      data-gallery-kind="project"
      data-before-after-ready="true"
    >
      {images.map((image, index) => {
        const isFeatured = index === 0;

        return (
          <figure
            key={`${image.src}-${index}`}
            data-reveal
            className={`surface-card overflow-hidden rounded-[1.8rem] ${isFeatured ? "sm:col-span-2" : ""}`}
            style={{ ["--reveal-delay" as string]: `${index * 60}ms` }}
          >
            <div
              className={`relative ${isFeatured ? "min-h-[340px] sm:min-h-[440px]" : "min-h-[280px]"}`}
              data-gallery-image-kind={image.kind ?? "detail"}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes={isFeatured ? "(max-width: 768px) 100vw, 96vw" : "(max-width: 768px) 100vw, 50vw"}
              />
              <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
                {image.kind ?? (isFeatured ? "overview" : "detail")}
              </div>
            </div>
            {image.caption ? (
              <figcaption className="border-t border-brand-line/70 bg-white px-5 py-4 text-sm leading-6 text-brand-slate">
                {image.caption}
              </figcaption>
            ) : null}
          </figure>
        );
      })}
    </div>
  );
}
