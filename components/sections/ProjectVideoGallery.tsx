import type { ProjectVideo } from "@/types/project";

type ProjectVideoGalleryProps = {
  videos: ProjectVideo[];
};

export function ProjectVideoGallery({ videos }: ProjectVideoGalleryProps) {
  if (!videos.length) {
    return null;
  }

  return (
    <div className={videos.length === 1 ? "mx-auto w-full max-w-sm" : "grid gap-6 md:grid-cols-2"}>
      {videos.map((video, index) => (
        <figure
          key={video.src}
          data-reveal
          className="surface-card overflow-hidden"
          style={{ ["--reveal-delay" as string]: `${index * 60}ms` }}
        >
          <video
            controls
            playsInline
            preload="metadata"
            poster={video.poster}
            className="aspect-[9/16] w-full bg-brand-navy object-cover"
            aria-label={video.title}
          >
            <source src={video.src} type="video/mp4" />
            Your browser does not support embedded video.
          </video>
          <figcaption className="border-t border-brand-line/70 bg-white px-5 py-4">
            <p className="font-semibold text-brand-navy">{video.title}</p>
            <p className="mt-1 text-sm leading-6 text-brand-slate">{video.caption}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
