/* a plain calendar in Calendly blue — the booking link, not a brand logo */
export function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" role="img" aria-label="Calendly">
      <rect x="1.6" y="1.6" width="20.8" height="20.8" rx="6" fill="#006bff" />
      <rect x="6" y="7.4" width="12" height="10.6" rx="1.6" fill="none" stroke="#fff" strokeWidth="1.7" />
      <path d="M6 11h12M9.4 5.6v3.4M14.6 5.6v3.4" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" />
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
  order = ["calendly", "linkedin"],
}: {
  brand: { calendly: string; linkedin: string };
  order?: ("calendly" | "linkedin")[];
}) {
  return (
    <>
      {order
        .filter((k) => brand[k])
        .map((k) => (
          <a key={k} href={brand[k]} target="_blank" rel="noopener noreferrer">
            {k === "calendly" ? <CalendarIcon /> : <LinkedInIcon />}
          </a>
        ))}
    </>
  );
}
