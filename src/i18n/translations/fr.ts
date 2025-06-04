import { TranslationType } from "./types";

export const fr: TranslationType = {
  nav: {
    home: "Accueil",
    about: "À propos",
    skills: "Compétences",
    projects: "Projets",
    testimonials: "Témoignages",
    contact: "Contact",
    menuToggle: "Basculer le menu",
  },

  // Hero Section
  hero: {
    greeting: "Bonjour, je suis",
    role: "Développeur Front-End",
    description:
      "Je crée des sites et des applications web performants et attractifs en utilisant des technologies modernes, en mettant l'accent sur l'expérience utilisateur.",
    viewWork: "Voir mes projets",
    contactMe: "Me contacter",
  },

  // About Section
  about: {
    title: "À propos de moi",
    subtitle: "Développeur Front-End axé sur l'UI/UX",
    description:
      "Je suis un développeur front-end passionné, spécialisé dans la création d'interfaces web soignées, accessibles et prêtes à être mises en production. Grâce à mon expertise en React et TypeScript, je développe des interfaces utilisateur complexes, performantes et faciles à maintenir. Mon approche allie excellence technique, compréhension approfondie des besoins utilisateurs et respect des principes de conception modernes. Je m'engage à offrir des expériences intuitives et accessibles, tout en restant à la pointe des technologies web et des tendances du design.",
    services: {
      frontend: {
        title: "Développement Front-End",
        description:
          "Je me spécialise dans la création d'applications web modernes et responsives avec React et TypeScript, en mettant l'accent sur la performance, l'évolutivité et l'expérience utilisateur.",
      },
      design: {
        title: "Conception UI/UX",
        description:
          "Je conçois des interfaces utilisateur intuitives et esthétiques qui respectent les principes modernes de conception et les normes d'accessibilité, garantissant une expérience fluide.",
      },
      performance: {
        title: "Performance Web",
        description:
          "J'optimise les applications web pour la rapidité et l'efficacité grâce à des techniques telles que le chargement différé et le découpage du code, afin d'améliorer les temps de chargement et l'interaction utilisateur.",
      },
    },
  },

  // Skills Section
  skills: {
    title: "Mes compétences",
    description: "Voici les technologies et outils que je maîtrise.",
    categories: {
      all: "Tout",
      frontend: "Front-End",
      design: "Design",
      tools: "Outils",
    },
    proficiency: "Maîtrise",
  },

  // Projects Section
  projects: {
    title: "Mes projets",
    description:
      "Voici quelques-uns de mes projets récents. Chacun présente différents défis et solutions utilisant diverses technologies.",
    comingSoon: "Bientôt disponible",
    viewMore: "Voir plus sur GitHub",
    projectCounter: "Projet {current} sur {total}",
    tags: {
      live: "Démo en ligne",
      code: "Code",
    },
    items: {
      pokemon: {
        title: "Jeu de mémoire (Pokémon)",
        description:
          "Un jeu de mémoire où les joueurs associent des cartes Pokémon. Comprend plusieurs niveaux et conditions de fin. Construit avec React et un design responsive pour tous les écrans.",
      },
      shopping: {
        title: "Application Panier d'Achat",
        description:
          "Une application e-commerce développée avec React. Les utilisateurs peuvent parcourir les produits, les ajouter au panier et passer commande. Intègre une API et un design responsive.",
      },
      resume: {
        title: "Site Web de CV Responsive",
        description:
          "Un site web de CV personnalisé présentant un profil professionnel, la formation, l'expérience et les compétences. Construit avec HTML, CSS et JavaScript, avec thèmes clair et sombre.",
      },
      military: {
        title: "Boutique d'Équipements Militaires",
        description:
          "Une application e-commerce développée avec React. Les utilisateurs peuvent parcourir les produits, les ajouter au panier et passer commande. Intègre une API et un design responsive.",
      },
    },
  },

  // Testimonials Section
  testimonials: {
    title: "Témoignages",
    subtitle: "Ce que l'on dit de mon travail",
    items: {
      yassine: {
        name: "Yassine Benjelloun",
        role: "Chef de produit",
        company: "Softech Solutions",
        content:
          "Travailler avec ce développeur a été une expérience exceptionnelle. Son expertise dans la création d'applications web performantes et intuitives est impressionnante. Il est attentif aux détails et réactif à nos retours, livrant un travail de grande qualité.",
      },
      clara: {
        name: "Clara Dupont",
        role: "Développeuse principale",
        company: "TechWave",
        content:
          "Ce développeur allie maîtrise technique et passion pour le design. Ses contributions à notre plateforme e-commerce ont considérablement amélioré notre processus de développement et l'expérience utilisateur. Toujours fiable et innovant !",
      },
      marco: {
        name: "Marco Rossi",
        role: "Designer UX/UI",
        company: "Pixelate Studios",
        content:
          "J'ai collaboré avec de nombreux développeurs, mais celui-ci se démarque. Sa capacité à transformer des concepts complexes en code fluide est remarquable. Le résultat : un design adaptatif et homogène sur tous les appareils.",
      },
    },
  },

  // Contact Section
  contact: {
    title: "Me contacter",
    description:
      "Vous avez un projet en tête ou souhaitez simplement échanger ? N'hésitez pas à m'écrire via le formulaire ci-dessous.",
    contactInfo: {
      title: "Coordonnées",
      email: "Email",
      phone: "Téléphone",
      social: "Réseaux sociaux",
    },
    availability: {
      title: "Disponibilité actuelle",
      description:
        "Je suis actuellement disponible pour des missions freelance et ouvert à de nouvelles opportunités. Je réponds généralement dans les 24 heures.",
    },
    form: {
      name: "Votre nom",
      namePlaceholder: "Nom complet",
      email: "Votre email",
      emailPlaceholder: "email@exemple.com",
      message: "Message",
      messagePlaceholder: "Parlez-moi de votre projet...",
      send: "Envoyer le message",
      sending: "Envoi en cours...",
    },
    messages: {
      success:
        "Message envoyé ! Merci pour votre prise de contact. Je vous répondrai rapidement.",
      error:
        "Une erreur est survenue lors de l'envoi. Veuillez réessayer plus tard.",
      autoReplyError:
        "Une erreur est survenue lors de l'envoi de la réponse automatique. Veuillez réessayer plus tard.",
    },
  },

  // Footer
  footer: {
    tagline: "Créer des expériences numériques inspirantes.",
    copyright: "© {{year}} Mohamed B. — Licence MIT",
  },
};
