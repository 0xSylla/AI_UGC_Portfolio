"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Gallery, Site } from "@/content/site";

const clipSrc = (id: string) => `/assets/clips/${id}.mp4`;
const posterSrc = (id: string) => `/assets/posters/${id}.jpg`;

/* --------------------------------------------------------------
   One card. Falls back to a labelled placeholder tile if the file
   is missing, so a bad id never leaves a blank hole in the grid.
   -------------------------------------------------------------- */
function ClipCard({ id, label, onOpen }: { id: string; label: string; onOpen: () => void }) {
  const video = useRef<HTMLVideoElement>(null);
  const [broken, setBroken] = useState(false);

  const play = () => video.current?.play().catch(() => {});
  const stop = () => {
    const v = video.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  };

  return (
    <article
      className="card"
      tabIndex={0}
      role="button"
      aria-label={label}
      onMouseEnter={play}
      onMouseLeave={stop}
      onFocus={play}
      onBlur={stop}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen();
        }
      }}
    >
      {/* the poster attribute paints the thumbnail on its own — no need to
          gate on loadeddata, which never fires under preload="metadata" */}
      {broken ? (
        <div className="ph" data-ph={id} />
      ) : (
        <video
          ref={video}
          muted
          loop
          playsInline
          preload="metadata"
          poster={posterSrc(id)}
          src={clipSrc(id)}
          onError={() => setBroken(true)}
        />
      )}
      <div className="card__play" />
    </article>
  );
}

/* --------------------------------------------------------------
   Galleries + the shared lightbox. One flat list backs the
   arrow-key navigation across all three rows.
   -------------------------------------------------------------- */
export default function Galleries({ galleries, ui }: { galleries: Gallery[]; ui: Site["ui"] }) {
  const all = galleries.flatMap((g) => g.clips);
  const [open, setOpen] = useState<number | null>(null);
  const lbVideo = useRef<HTMLVideoElement>(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (d: number) => setOpen((i) => (i === null ? i : (i + d + all.length) % all.length)),
    [all.length],
  );

  useEffect(() => {
    if (open === null) return;
    document.body.classList.add("is-locked");
    /* this runs after the click, outside the gesture — Safari/iOS then refuse
       to start a video with sound. Fall back to muted playback; the native
       controls let the viewer unmute. */
    const v = lbVideo.current;
    v?.play().catch(() => {
      v.muted = true;
      v.play().catch(() => {});
    });

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    addEventListener("keydown", onKey);
    return () => {
      removeEventListener("keydown", onKey);
      document.body.classList.remove("is-locked");
    };
  }, [open, close, step]);

  let offset = 0;

  return (
    <>
      {galleries.map((g, gi) => {
        const base = offset;
        offset += g.clips.length;

        return (
          <div key={g.title} id={gi === 0 ? "examples" : undefined}>
            <section className="gal">
              <div className="wrap">
                <h2 className="gal__title">{g.title}</h2>
                <div className="gal__row">
                  {g.clips.map((id, i) => (
                    <ClipCard key={id} id={id} label={ui.playClip} onOpen={() => setOpen(base + i)} />
                  ))}
                </div>
              </div>
            </section>

            {g.bleed ? (
              <div className="band band--bleed" />
            ) : (
              <div className="wrap">
                <div className="band" />
              </div>
            )}
          </div>
        );
      })}

      {open !== null && (
        <div className="lightbox" onClick={(e) => e.target === e.currentTarget && close()}>
          <button className="lightbox__close" onClick={close} aria-label={ui.close}>
            ×
          </button>
          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={() => step(-1)}
            aria-label={ui.prev}
          >
            ‹
          </button>
          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={() => step(1)}
            aria-label={ui.next}
          >
            ›
          </button>
          <figure className="lightbox__stage">
            <video
              ref={lbVideo}
              key={all[open]}
              src={clipSrc(all[open])}
              poster={posterSrc(all[open])}
              playsInline
              controls
              autoPlay
            />
          </figure>
        </div>
      )}
    </>
  );
}
