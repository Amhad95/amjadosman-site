import React from "react";
import { Maximize2 } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export type MediaAsset = {
  type: "image" | "video";
  src: string;
  alt: string;
  poster?: string;
  caption?: string;
};

interface MediaLightboxProps {
  media: MediaAsset | null;
  onOpenChange: (media: MediaAsset | null) => void;
}

export const MediaLightbox: React.FC<MediaLightboxProps> = ({ media, onOpenChange }) => (
  <Dialog
    open={Boolean(media)}
    onOpenChange={(open) => {
      if (!open) onOpenChange(null);
    }}
  >
    <DialogContent className="max-w-[min(96vw,1600px)] border-0 bg-transparent p-2 text-white shadow-none sm:p-4">
      <DialogTitle className="sr-only">{media?.alt || "Media preview"}</DialogTitle>
      {media?.type === "video" ? (
        <video
          className="max-h-[88vh] w-full rounded-2xl object-contain shadow-2xl"
          src={media.src}
          poster={media.poster}
          controls
          autoPlay
          playsInline
        />
      ) : media ? (
        <img
          src={media.src}
          alt={media.alt}
          className="max-h-[88vh] w-full rounded-2xl object-contain shadow-2xl"
        />
      ) : null}
      {media?.caption && (
        <p className="px-2 text-center text-sm text-white/80 sm:px-8">{media.caption}</p>
      )}
    </DialogContent>
  </Dialog>
);

interface InlineMediaProps {
  media: MediaAsset;
  onOpen: (media: MediaAsset) => void;
  className?: string;
}

export const InlineMedia: React.FC<InlineMediaProps> = ({ media, onOpen, className }) => (
  <figure className={cn("my-10", className)}>
    <div
      className={cn(
        "group relative",
        media.type === "image" && "aspect-video overflow-hidden rounded-[24px]"
      )}
    >
      {media.type === "video" ? (
        <video
          className="block max-h-[38rem] w-full object-contain"
          src={media.src}
          poster={media.poster}
          controls
          preload="metadata"
          playsInline
        />
      ) : (
        <button
          type="button"
          className="block h-full w-full cursor-zoom-in text-left"
          onClick={() => onOpen(media)}
          aria-label={`Open ${media.alt}`}
        >
          <img
            src={media.src}
            alt={media.alt}
            className="!m-0 block h-full w-full !rounded-none object-cover !shadow-none transition-transform duration-500 group-hover:scale-[1.005]"
          />
        </button>
      )}
      {media.type === "video" && (
        <button
          type="button"
          className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-ink/65 text-white backdrop-blur transition-colors hover:bg-ink/85"
          onClick={() => onOpen(media)}
          aria-label={`Open ${media.alt} in a larger viewer`}
          title="Open larger viewer"
        >
          <Maximize2 className="h-4 w-4" />
        </button>
      )}
    </div>
    {media.caption && (
      <figcaption className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {media.caption}
      </figcaption>
    )}
  </figure>
);
