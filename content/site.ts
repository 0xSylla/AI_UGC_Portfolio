/* ============================================================
   CONTENT — the only file you normally edit.

   Clips  → public/assets/clips/<id>.mp4     (9:16 vertical)
   Poster → public/assets/posters/<id>.jpg   (same id)
   Photos → public/assets/img/

   NOTE: the prose below is placeholder written to fill the same
   slots as the reference layout. The figures came off the
   reference screenshot — confirm they match what YOU actually
   offer before publishing, since they read as commitments.
   ============================================================ */

export type Gallery = { title: string; clips: string[]; bleed?: boolean };
export type CompareRow = { cat: string; trad: string; ai: string };
export type FaqItem = { q: string; a: string };

export const site = {
  brand: {
    name: "AI UGC STUDIO",
    owner: "Cherif Sylla",
    email: "cherifsylla21@gmail.com",
    location: "Los Angeles, CA",
    instagram: "https://www.instagram.com/cherifsylla_/",
    linkedin: "", // empty → the icon is not rendered
    stars: 4.5,
    trust: "Trusted by 50+ brands",
  },

  hero: {
    /* one array entry per forced line — each still wraps on its own if the
       column is narrow, but the break between them is guaranteed */
    title: ["Stop paying for slow content.", "Scale with AI UGC ads"],
    body:
      "AI-generated, UGC-style video ads built to lift conversions, improve " +
      "ad performance and scale creative testing — without the cost of a " +
      "traditional production.",
    contactTitle: "Wanna get in touch",
    contactSub: "DM me on",
    or: "OR",
    portrait: "/assets/img/portrait.jpg",
  },

  tagline: "Helping ambitious brands ship more ad creative — faster",

  categories: [
    "E-commerce",
    "Beauty",
    "Fitness",
    "Mobile Apps",
    "Local businesses",
    "SaaS",
  ],

  galleries: [
    {
      title: "Video ad samples that convert.",
      clips: ["clip-01", "clip-02", "clip-03", "clip-04"],
    },
    {
      title: "AI UGC Examples",
      clips: ["clip-05", "clip-06", "clip-07", "clip-08"],
    },
    {
      title: "More examples..",
      clips: ["clip-09", "clip-10", "clip-11", "clip-12"],
      bleed: true,
    },
  ] as Gallery[],

  compare: {
    title: "Why brands are switching to AI UGC.",
    sub: "The honest comparison",
    head: ["Category", "Traditional UGC", "AI UGC"],
    rows: [
      { cat: "Production Time", trad: "2–4 weeks", ai: "24–72 hours" },
      { cat: "Cost", trad: "$500–2000+", ai: "$20–100" },
      { cat: "Scalability", trad: "Limited", ai: "Unlimited" },
      { cat: "Creative Testing", trad: "Expensive", ai: "Affordable" },
      { cat: "Localization", trad: "Very difficult", ai: "Easy" },
      { cat: "Revision Speed", trad: "Slow", ai: "Fast" },
    ] as CompareRow[],
    footer: "AI UGC wins in every category. Start creating faster today.",
  },

  about: {
    photo: "/assets/img/about.jpg",
    badge: { big: "Avg. delivery", small: "24 hours" },
    title: "I help brands ship high-performing UGC ads – using AI",
    label: "About me",
    paragraphs: [
      "I'm Cherif Sylla, an AI UGC creator helping brands produce " +
        "scroll-stopping video ads for social media and paid advertising.",
      "I combine AI-powered content creation with proven creative principles " +
        "to deliver high-quality videos that help brands test faster, scale " +
        "production, and reach more customers.",
      "The goal is simple: authentic, engaging content that earns attention " +
        "in the first few seconds and keeps viewers interested — from product " +
        "showcases to testimonial-style and direct-response creative.",
    ],
  },

  faq: {
    kicker: "FAQ · Common questions",
    title: "Everything you need to know about AI UGC ads.",
    note:
      "Still have questions? DM us on Instagram — we usually respond " +
      "within the same business day.",
    items: [
      {
        q: "What exactly is AI UGC?",
        a:
          "User-generated-content style video ads created with AI creators, " +
          "AI voice and conversion-driven scripts. The output looks and " +
          "performs like real UGC, at a fraction of the time and cost.",
      },
      {
        q: "How long does delivery take?",
        a:
          "Most orders land within 24 to 72 hours of brief approval. Larger " +
          "packs (10+ variations) can extend to 5 business days — you'll " +
          "always have a clear timeline up front.",
      },
      {
        q: "Can I request revisions?",
        a:
          "Every project includes two free rounds of revisions on script, " +
          "voice and edit. Additional revisions are available on demand.",
      },
      {
        q: "What industries do you work with?",
        a:
          "Ecommerce, beauty, skincare, fitness, supplements, SaaS, mobile " +
          "apps, fashion and consumer brands. If your business runs paid " +
          "ads, it's likely a fit.",
      },
      {
        q: "Do you create the scripts too?",
        a:
          "Yes — scripts are part of the package. We write direct-response " +
          "scripts based on your brand, offer and audience research, and " +
          "can adapt a script you bring us.",
      },
    ] as FaqItem[],
  },

  footerCta: "Contact Me!",
};

export type Site = typeof site;
