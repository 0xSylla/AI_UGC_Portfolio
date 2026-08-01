export function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" role="img" aria-label="Instagram">
      <defs>
        <linearGradient id="ig" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#FEDA75" />
          <stop offset=".35" stopColor="#FA7E1E" />
          <stop offset=".65" stopColor="#D62976" />
          <stop offset="1" stopColor="#962FBF" />
        </linearGradient>
      </defs>
      <rect x="1.6" y="1.6" width="20.8" height="20.8" rx="6" fill="url(#ig)" />
      <circle cx="12" cy="12" r="4.6" fill="none" stroke="#fff" strokeWidth="1.9" />
      <circle cx="17.4" cy="6.6" r="1.3" fill="#fff" />
    </svg>
  );
}

export function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" role="img" aria-label="LinkedIn">
      <rect x="1.6" y="1.6" width="20.8" height="20.8" rx="4" fill="#0277b5" />
      <path
        fill="#fff"
        d="M6.9 9.6h2.6V18H6.9zM8.2 5.6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM11.3 9.6h2.5v1.2c.4-.7 1.3-1.4 2.7-1.4 2.2 0 3 1.4 3 3.7V18h-2.6v-4.4c0-1.1-.4-1.8-1.4-1.8-1 0-1.6.7-1.6 1.8V18h-2.6z"
      />
    </svg>
  );
}

/** Renders only the networks that actually have a URL. */
export function SocialLinks({
  brand,
  order = ["instagram", "linkedin"],
}: {
  brand: { instagram: string; linkedin: string };
  order?: ("instagram" | "linkedin")[];
}) {
  return (
    <>
      {order
        .filter((k) => brand[k])
        .map((k) => (
          <a key={k} href={brand[k]} target="_blank" rel="noopener noreferrer">
            {k === "instagram" ? <InstagramIcon /> : <LinkedInIcon />}
          </a>
        ))}
    </>
  );
}
