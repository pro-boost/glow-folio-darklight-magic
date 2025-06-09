import { TranslationType } from "@/i18n";

export const en: TranslationType = {
  nav: {
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    testimonials: "Testimonials",
    contact: "Contact",
    menuToggle: "Menu",
  },

  hero: {
    greeting: "Hi there, I'm",
    role: "Front-End Developer",
    description: "I create stunning, performant websites and web applications with modern technologies and a focus on user experience.",
    viewWork: "View My Work",
    contactMe: "Contact Me",
  },

  about: {
    title: "About Me",
    subtitle: "Front-End Developer with a Focus on UI/UX",
    description: "I'm a passionate front-end developer specializing in creating polished, accessible, and production-ready web interfaces. With expertise in React and TypeScript, I craft complex, high-performance user interfaces that are easy to maintain. My approach blends technical excellence with a deep understanding of user needs and modern design principles. I'm dedicated to delivering intuitive, accessible experiences while staying up-to-date with the latest web technologies and design trends.",
    services: {
      frontend: {
        title: "Frontend Development",
        description: "I specialize in building modern, responsive web applications using React and TypeScript, focusing on performance, scalability, and user experience.",
      },
      design: {
        title: "UI/UX Design",
        description: "I design intuitive, beautiful user interfaces that follow modern design principles and meet accessibility standards, ensuring a seamless user experience.",
      },
      performance: {
        title: "Web Performance",
        description: "I optimize web applications for speed and efficiency, using techniques like lazy loading and code splitting to improve loading times and user interaction.",
      },
    },
  },

  skills: {
    title: "My Skills",
    description: "Here are the technologies and tools I specialize in.",
    categories: {
      all: "All",
      frontend: "Frontend",
      design: "Design",
      tools: "Tools",
    },
    proficiency: "Proficiency",
  },

  projects: {
    title: "My Projects",
    description: "Here are some of my recent projects. Each one represents different challenges and solutions using various technologies.",
    comingSoon: "Coming Soon",
    viewMore: "View More on GitHub",
    projectCounter: "Project {{current}} of {{total}}",
    tags: {
      live: "Live Demo",
      code: "Code",
    },
    items: {
      pokemon: {
        title: "Memory Card Game (Pokémon)",
        description: "A memory card game where players match Pokémon cards. Includes multiple levels and game-over conditions. Built with React and responsive design for all screen sizes.",
      },
      shopping: {
        title: "Shopping Cart WebApp",
        description: "An e-commerce web application built with React. Users can browse products, add them to a cart, and proceed to checkout. Includes API integration and responsive design.",
      },
      resume: {
        title: "Responsive Resume Website",
        description: "A personalized resume website designed to present a professional profile, education, work experience, and skills. Built with HTML, CSS, and JavaScript, featuring light and dark themes.",
      },
      military: {
        title: "Military Equipment Shop",
        description: "An e-commerce web application built with React. Users can browse products, add them to a cart, and proceed to checkout. Includes API integration and responsive design.",
      },
    },
  },

  testimonials: {
    title: "Testimonials",
    subtitle: "What People Say About My Work",
    items: {
      yassine: {
        name: "Yassine Benjelloun",
        role: "Product Manager",
        company: "Softech Solutions",
        content: "Collaborating with this developer was an incredible experience. Their expertise in creating user-friendly and high-performance web apps is remarkable. They paid attention to every detail and always adapted to our feedback, delivering top-notch results.",
      },
      clara: {
        name: "Clara Dupont",
        role: "Lead Developer",
        company: "TechWave",
        content: "This developer combines technical mastery with a real passion for design. Their contributions to our e-commerce platform have greatly improved both our development workflow and the overall user experience. Always reliable and innovative!",
      },
      marco: {
        name: "Marco Rossi",
        role: "UX/UI Designer",
        company: "Pixelate Studios",
        content: "I've worked with many developers, but this one stands out. Their ability to take complex design concepts and turn them into flawless code is exceptional. The result was a seamless, responsive design that performed excellently across all devices.",
      },
    },
  },

  contact: {
    title: "Get In Touch",
    description: "Have a project in mind or just want to say hello? I'd love to hear from you. Feel free to reach out using the form below.",
    info: {
      title: "Contact Info",
      email: {
        label: "Email"
      },
      phone: {
        label: "Phone"
      },
      social: {
        label: "Social"
      }
    },
    availability: {
      title: "Current Availability",
      description: "I'm currently available for freelance work and open to new opportunities. My usual response time is within 24 hours.",
    },
    form: {
      name: "Your Name",
      namePlaceholder: "Full name",
      email: "Your Email",
      emailPlaceholder: "email@example.com",
      message: "Message",
      messagePlaceholder: "Tell me about your project...",
      send: "Send Message",
      sending: "Sending...",
    },
    messages: {
      success: "Message sent! Thank you for reaching out. I'll get back to you soon.",
      error: "There was an error sending your message. Please try again later.",
      autoReplyError: "There was an error sending the auto-reply. Please try again later.",
    },
  },

  footer: {
    tagline: "Creating digital experiences that inspire.",
    copyright: "© {{year}} Mohamed B. — MIT Licensed",
  },
}; 