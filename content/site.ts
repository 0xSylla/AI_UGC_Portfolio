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
export type Plan = {
  name: string;
  pitch: string;
  price: string;
  items: string[];
  link?: "agencies";
  featured?: boolean;
};
export type FaqItem = { q: string; a: string };

export const site = {
  lang: "en",

  meta: {
    title: "AI UGC Studio — UGC-style video ads that convert",
    description:
      "AI-generated UGC-style video ads for brands. Scale creative testing " +
      "without traditional production costs.",
    ogTitle: "AI UGC Studio",
    ogDescription: "AI-generated UGC-style video ads that convert.",
  },

  /* site paths, so each language links within itself */
  paths: { home: "/", agencies: "/agencies" },

  /* short UI strings — nav, aria labels and the language switch */
  ui: {
    nav: { agencies: "For agencies" },
    starsOf: "out of 5 stars",
    portrait: "portrait",
    industries: "Industries",
    playClip: "Play clip",
    close: "Close",
    prev: "Previous",
    next: "Next",
    bookCall: "Book a call on Calendly",
    langSwitch: { label: "FR", aria: "Voir le site en français" },
  },

  brand: {
    name: "AI UGC STUDIO",
    owner: "Cherif Sylla",
    email: "cherifsylla21@gmail.com",
    calendly: "https://calendly.com/cherifsylla21/30min",
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
    contactSub: "Book a call",
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
      clips: ["clip-01", "clip-02", "clip-04", "clip-05"],
    },
    {
      title: "AI UGC Examples",
      clips: ["clip-06", "clip-07", "clip-10", "clip-12"],
      bleed: true,
    },
  ] as Gallery[],

  pricing: {
    title: "Packages",
    sub: "Clear scopes, no surprises. Every package is quoted on your brief.",
    plans: [
      {
        name: "Starter",
        pitch: "Test one product, fast.",
        price: "Quote on request",
        items: [
          "5 video variations (hooks & angles)",
          "1 product, 1 script",
          "Delivered within 72 hours",
          "2 revision rounds",
          "9:16, ready for Meta, TikTok & Reels",
        ],
      },
      {
        name: "Growth",
        pitch: "Ongoing creative testing.",
        price: "Quote on request",
        items: [
          "10 video variations",
          "Up to 3 script angles",
          "Delivered within 5 business days",
          "2 revision rounds",
          "Captions included",
        ],
      },
      {
        name: "Agency pack",
        pitch: "For agencies running several clients.",
        price: "Quote on request",
        items: [
          "20 videos / month",
          "White label — delivered under your brand",
          "NDA on request",
          "One monthly invoice",
          "Priority turnaround",
        ],
        link: "agencies",
        featured: true,
      },
    ] as Plan[],
    cta: "Book a call",
    more: "Agency details",
  },

  limits: {
    title: "What AI UGC does well — and where it doesn't.",
    sub: "Straight answers, so you know what you're buying.",
    goodTitle: "Where it shines",
    good: [
      "Testing many hooks and angles quickly, without re-shooting",
      "Talking-head testimonials and problem/solution scripts",
      "Turning one winning ad into several languages",
      "Fast iterations on whatever is performing",
    ],
    badTitle: "Where it's limited",
    bad: [
      "Hands handling a product — fingers, grip and labels can drift. For close-ups I use your real product shots.",
      "Detailed physical demos (applying, unboxing, texture) look more convincing filmed for real.",
      "Faces hold up well in talking-head framing; fast motion and extreme close-ups are less reliable.",
      "Platforms may require AI content to be labelled, and health or before/after claims need your own compliance review.",
    ],
    footer: "If a brief isn't a good fit for AI, I'll tell you before we start.",
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
      "Still have questions? Book a 30-minute call — pick whichever " +
      "slot suits you.",
    items: [
      {
        q: "What exactly is AI UGC?",
        a:
          "User-generated-content style video ads created with AI creators, " +
          "AI voice and conversion-driven scripts. It looks like UGC and is " +
          "built to perform like it, in a fraction of the time — the section " +
          "above covers what it doesn't do well.",
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

  agencies: {
    metaTitle: "AI UGC for agencies — white label video ads | AI UGC Studio",
    metaDescription:
      "White-label AI UGC video ads for agencies: monthly volume, 24–72 hour " +
      "turnaround, NDA on request, one monthly invoice.",
    kicker: "For agencies",
    title: "AI UGC for your clients. Under your brand.",
    intro:
      "You own the strategy and the client relationship; I produce the " +
      "volume. UGC-style video ads delivered white label, on a schedule " +
      "your clients can count on.",
    points: [
      {
        title: "White label",
        body:
          "No name, no watermark, no credit. You present the work as your " +
          "studio's, and I never contact your clients directly.",
      },
      {
        title: "Volume",
        body:
          "From 20 videos a month, split across as many client accounts as " +
          "you need, with hook and angle variations built for testing.",
      },
      {
        title: "Turnaround",
        body:
          "24–72 hours per batch once the brief is approved; larger batches " +
          "within 5 business days. Timelines are agreed up front.",
      },
      {
        title: "NDA available",
        body:
          "Happy to sign your NDA before seeing client briefs. Client work " +
          "stays off my portfolio unless you say otherwise.",
      },
      {
        title: "Monthly invoicing",
        body:
          "One invoice a month for all your clients, instead of paying " +
          "order by order.",
      },
    ],
    stepsTitle: "How we start",
    steps: [
      "A 30-minute call: your clients, volumes and how you brief.",
      "A test batch on one client, so you can judge the quality on real work.",
      "A monthly plan sized to your pipeline, adjustable each month.",
    ],
    ctaTitle: "Let's see if it fits.",
    cta: "Book a 30-minute call",
    or: "or email",
    examples: "See video examples",
  },

  footerCta: "Contact Me!",
};

export type Site = typeof site;
