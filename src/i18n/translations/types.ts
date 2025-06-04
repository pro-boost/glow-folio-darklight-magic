export type Language = "en" | "fr";

export type TranslationType = {
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    testimonials: string;
    contact: string;
    menuToggle: string;
  };
  hero: {
    greeting: string;
    role: string;
    description: string;
    viewWork: string;
    contactMe: string;
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
    services: {
      frontend: {
        title: string;
        description: string;
      };
      design: {
        title: string;
        description: string;
      };
      performance: {
        title: string;
        description: string;
      };
    };
  };
  skills: {
    title: string;
    description: string;
    categories: {
      all: string;
      frontend: string;
      design: string;
      tools: string;
    };
    proficiency: string;
  };
  projects: {
    title: string;
    description: string;
    comingSoon: string;
    viewMore: string;
    projectCounter: string;
    tags: {
      live: string;
      code: string;
    };
    items: {
      pokemon: {
        title: string;
        description: string;
      };
      shopping: {
        title: string;
        description: string;
      };
      resume: {
        title: string;
        description: string;
      };
      military: {
        title: string;
        description: string;
      };
    };
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: {
      yassine: {
        name: string;
        role: string;
        company: string;
        content: string;
      };
      clara: {
        name: string;
        role: string;
        company: string;
        content: string;
      };
      marco: {
        name: string;
        role: string;
        company: string;
        content: string;
      };
    };
  };
  contact: {
    title: string;
    description: string;
    contactInfo: {
      title: string;
      email: string;
      phone: string;
      social: string;
    };
    availability: {
      title: string;
      description: string;
    };
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      send: string;
      sending: string;
    };
    messages: {
      success: string;
      error: string;
      autoReplyError: string;
    };
  };
  footer: {
    tagline: string;
    copyright: string;
  };
}; 