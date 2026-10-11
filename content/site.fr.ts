/* ============================================================
   CONTENU — version française (servie sur /fr).
   Même structure que site.ts : toute clé ajoutée là-bas doit
   l'être ici aussi, sinon TypeScript refuse le build.
   ============================================================ */

import type { FaqItem, Gallery, Plan, Site } from "./site";
import { site as en } from "./site";

export const siteFr: Site = {
  lang: "fr",

  meta: {
    title: "AI UGC Studio — Des pubs vidéo style UGC qui convertissent",
    description:
      "Des publicités vidéo style UGC générées par IA pour les marques. " +
      "Multipliez vos tests créatifs sans les coûts d'une production classique.",
    ogTitle: "AI UGC Studio",
    ogDescription: "Des pubs vidéo style UGC générées par IA, qui convertissent.",
  },

  paths: { home: "/fr", agencies: "/fr/agencies" },

  ui: {
    nav: { agencies: "Agences" },
    starsOf: "sur 5 étoiles",
    portrait: "portrait",
    industries: "Secteurs",
    playClip: "Lire la vidéo",
    close: "Fermer",
    prev: "Précédent",
    next: "Suivant",
    bookCall: "Réserver un appel sur Calendly",
    langSwitch: { label: "EN", aria: "View the site in English" },
  },

  brand: {
    ...en.brand,
    trust: "Plus de 50 marques nous font confiance",
  },

  hero: {
    ...en.hero,
    title: ["Arrêtez de payer pour du contenu lent.", "Passez à l'échelle avec l'UGC IA"],
    body:
      "Des publicités vidéo style UGC générées par IA, conçues pour booster " +
      "vos conversions, améliorer la performance de vos pubs et multiplier " +
      "vos tests créatifs — sans le coût d'une production classique.",
    contactTitle: "Envie d'échanger ?",
    contactSub: "Réservez un appel",
    or: "OU",
  },

  tagline: "J'aide les marques ambitieuses à produire plus de créas pub — plus vite",

  categories: [
    "E-commerce",
    "Beauté",
    "Fitness",
    "Applis mobiles",
    "Commerces locaux",
    "SaaS",
  ],

  galleries: [
    { ...en.galleries[0], title: "Des exemples de pubs vidéo qui convertissent." },
    { ...en.galleries[1], title: "Exemples d'UGC IA" },
  ] as Gallery[],

  pricing: {
    title: "Forfaits",
    sub: "Un périmètre clair, sans surprise. Chaque forfait est chiffré sur votre brief.",
    plans: [
      {
        name: "Starter",
        pitch: "Tester un produit, vite.",
        price: "Sur devis",
        items: [
          "5 variantes vidéo (hooks et angles)",
          "1 produit, 1 script",
          "Livré sous 72 heures",
          "2 séries de retouches",
          "Format 9:16, prêt pour Meta, TikTok et Reels",
        ],
      },
      {
        name: "Growth",
        pitch: "Des tests créatifs en continu.",
        price: "Sur devis",
        items: [
          "10 variantes vidéo",
          "Jusqu'à 3 angles de script",
          "Livré sous 5 jours ouvrés",
          "2 séries de retouches",
          "Sous-titres inclus",
        ],
      },
      {
        name: "Agency pack",
        pitch: "Pour les agences qui gèrent plusieurs clients.",
        price: "Sur devis",
        items: [
          "20 vidéos / mois",
          "Marque blanche — livré sous votre marque",
          "Accord de confidentialité sur demande",
          "Une facture mensuelle",
          "Délais prioritaires",
        ],
        link: "agencies",
        featured: true,
      },
    ] as Plan[],
    cta: "Réserver un appel",
    more: "Détails pour les agences",
  },

  limits: {
    title: "Ce que l'UGC IA fait bien — et ses limites.",
    sub: "Des réponses franches, pour savoir exactement ce que vous achetez.",
    goodTitle: "Là où elle excelle",
    good: [
      "Tester beaucoup de hooks et d'angles rapidement, sans retournage",
      "Témoignages face caméra et scripts problème/solution",
      "Décliner une pub gagnante en plusieurs langues",
      "Itérer vite sur ce qui performe",
    ],
    badTitle: "Là où elle a ses limites",
    bad: [
      "Les mains qui manipulent un produit — doigts, prise en main et étiquettes peuvent déraper. Pour les gros plans, j'utilise vos vraies photos produit.",
      "Les démos physiques détaillées (application, déballage, texture) sont plus convaincantes filmées en vrai.",
      "Les visages tiennent bien en plan face caméra ; les mouvements rapides et les très gros plans sont moins fiables.",
      "Les plateformes peuvent exiger d'étiqueter le contenu IA, et les allégations santé ou avant/après doivent passer par votre propre validation juridique.",
    ],
    footer: "Si un brief ne convient pas à l'IA, je vous le dis avant de commencer.",
  },

  about: {
    ...en.about,
    badge: { big: "Livraison moy.", small: "24 heures" },
    title: "J'aide les marques à produire des pubs UGC performantes – grâce à l'IA",
    label: "À propos",
    paragraphs: [
      "Je suis Cherif Sylla, créateur d'UGC IA. J'aide les marques à produire " +
        "des pubs vidéo qui arrêtent le scroll, pour les réseaux sociaux et " +
        "la publicité payante.",
      "J'allie la création de contenu par IA à des principes créatifs éprouvés " +
        "pour livrer des vidéos de qualité qui aident les marques à tester plus " +
        "vite, à produire à grande échelle et à toucher plus de clients.",
      "L'objectif est simple : un contenu authentique et engageant qui capte " +
        "l'attention dès les premières secondes et la garde — des démos produit " +
        "aux formats témoignage et réponse directe.",
    ],
  },

  faq: {
    kicker: "FAQ · Questions fréquentes",
    title: "Tout ce qu'il faut savoir sur les pubs UGC IA.",
    note:
      "D'autres questions ? Réservez un appel de 30 minutes — choisissez " +
      "le créneau qui vous arrange.",
    items: [
      {
        q: "C'est quoi exactement l'UGC IA ?",
        a:
          "Des publicités vidéo au style « contenu créé par les utilisateurs », " +
          "réalisées avec des créateurs IA, une voix IA et des scripts pensés " +
          "pour la conversion. Le rendu ressemble à de l'UGC et est conçu " +
          "pour performer comme tel, en une fraction du temps — la section " +
          "plus haut détaille ce qu'elle fait moins bien.",
      },
      {
        q: "Quel est le délai de livraison ?",
        a:
          "La plupart des commandes sont livrées sous 24 à 72 heures après " +
          "validation du brief. Les gros packs (10+ variantes) peuvent aller " +
          "jusqu'à 5 jours ouvrés — vous avez toujours un planning clair dès le départ.",
      },
      {
        q: "Puis-je demander des retouches ?",
        a:
          "Chaque projet inclut deux séries de retouches gratuites sur le " +
          "script, la voix et le montage. Des retouches supplémentaires sont " +
          "possibles sur demande.",
      },
      {
        q: "Avec quels secteurs travaillez-vous ?",
        a:
          "E-commerce, beauté, soin de la peau, fitness, compléments, SaaS, " +
          "applis mobiles, mode et marques grand public. Si votre activité " +
          "fait de la publicité payante, il y a de fortes chances que ça colle.",
      },
      {
        q: "Vous écrivez aussi les scripts ?",
        a:
          "Oui — les scripts font partie de l'offre. Nous rédigeons des scripts " +
          "en réponse directe à partir de votre marque, de votre offre et de " +
          "l'étude de votre audience, et pouvons adapter un script que vous " +
          "nous fournissez.",
      },
    ] as FaqItem[],
  },

  agencies: {
    metaTitle: "UGC IA pour agences — pubs vidéo en marque blanche | AI UGC Studio",
    metaDescription:
      "Des pubs vidéo UGC IA en marque blanche pour les agences : volume " +
      "mensuel, livraison en 24–72 h, accord de confidentialité, facturation mensuelle.",
    kicker: "Pour les agences",
    title: "De l'UGC IA pour vos clients. Sous votre marque.",
    intro:
      "Vous gardez la stratégie et la relation client ; je produis le " +
      "volume. Des pubs vidéo style UGC livrées en marque blanche, avec " +
      "des délais sur lesquels vos clients peuvent compter.",
    points: [
      {
        title: "Marque blanche",
        body:
          "Ni nom, ni filigrane, ni crédit. Vous présentez le travail comme " +
          "celui de votre studio, et je ne contacte jamais vos clients.",
      },
      {
        title: "Volume",
        body:
          "À partir de 20 vidéos par mois, réparties sur autant de comptes " +
          "clients que nécessaire, avec des variantes de hooks et d'angles " +
          "pensées pour les tests.",
      },
      {
        title: "Délais",
        body:
          "24 à 72 heures par lot après validation du brief ; sous 5 jours " +
          "ouvrés pour les gros lots. Le planning est fixé dès le départ.",
      },
      {
        title: "Confidentialité",
        body:
          "Je signe volontiers votre accord de confidentialité avant de voir " +
          "les briefs clients. Leurs vidéos n'apparaissent pas dans mon " +
          "portfolio, sauf accord de votre part.",
      },
      {
        title: "Facturation mensuelle",
        body:
          "Une seule facture par mois pour tous vos clients, au lieu de " +
          "payer commande par commande.",
      },
    ],
    stepsTitle: "Comment on démarre",
    steps: [
      "Un appel de 30 minutes : vos clients, vos volumes, votre façon de briefer.",
      "Un lot test sur un client, pour juger la qualité sur du vrai travail.",
      "Un forfait mensuel calé sur votre activité, ajustable chaque mois.",
    ],
    ctaTitle: "Voyons si ça colle.",
    cta: "Réserver un appel de 30 min",
    or: "ou par email",
    examples: "Voir des exemples de vidéos",
  },

  footerCta: "Contactez-moi !",
};
