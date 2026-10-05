/* =========================================================
   TYPES
   ========================================================= */

export type TextStyle =
  | "default"
  | "primary"
  | "muted"
  | "blue"
  | "gold"
  | "white"
  | "bold";

export type TextSegment = {
  text: string;
  style?: TextStyle;
  breakAfter?: boolean;
};

export type SocialLink = {
  name: string;
  url: string;
  username?: string;
};

export type Skill = {
  name: string;
  category: "language" | "framework" | "library" | "tool" | "platform";
};

export type Hobby = {
  name: string;
  emoji: string;
  active: boolean;
};

export type PersonalInfo = {
  name: string;
  firstName: string;
  shortName: string;
  title: string;
  experience: string;
  location: string;
  education: {
    institution: string;
    programme: string;
    level: string;
  };
};

export type AboutSection = {
  short: string;
  long: string[];
};

export type Dream = {
  label: string;
  description: string;
};

export type PortfolioData = {
  personal: PersonalInfo;
  about: AboutSection;
  codeIntro: TextSegment[];
  skills: Skill[];
  hobbies: Hobby[];
  dreams: {
    career: Dream;
    companies: string[];
    vacation: Dream;
  };
  socials: SocialLink[];
};


/* =========================================================
   PERSONAL INFORMATION
   ========================================================= */

export const personal: PersonalInfo = {
  name: "Festus Phillip Adebola",
  firstName: "Festus",
  shortName: "A.",

  title: "Problem - Program - Solution",

  experience: "5+ years of experience",

  location: "Nigeria",

  education: {
    institution:
      "Olusegun Agagu University of Science and Technology",

    programme: "Computer Science",

    level: "400 Level — Final Year",
  },
};


/* =========================================================
   ABOUT ME
   ========================================================= */

export const about: AboutSection = {
  short:
    "I'm a software developer focused on building modern web and mobile applications with JavaScript technologies.",

  long: [
    "I'm Festus Phillip Adebola, a software developer with 5+ years of experience building digital products and solving problems with technology.",

    "I specialize in JavaScript technologies and use modern frameworks, libraries, and tools to build responsive, scalable, and user-focused web and mobile applications.",

    "My work spans frontend and backend development, from crafting interfaces with React and Next.js to building application logic and APIs with technologies such as Express.",

    "I'm currently in my final year studying Computer Science at Olusegun Agagu University of Science and Technology, where I'm continuing to strengthen the theoretical and practical foundations behind the software I build.",

    "Beyond writing code, I'm interested in technology, product design, business, trading, gaming, and the future of software. My long-term goal is to build a technology company of my own and create products that can operate at a global scale.",
  ],
};


/* =========================================================
   CODE-STYLE INTRO
   ========================================================= */

export const codeIntro: TextSegment[] = [
  {
    text: "if (!coding 👨‍💻) {",
    style: "blue",
  },

  {
    text: "Gaming 🎮: true,",
    style: "gold",
  },

  {
    text: "Trading 📉: true,",
    style: "blue",
  },

  {
    text: "Watching movie series 🎬: true,",
    style: "gold",
  },

  {
    text: "Reading 📖: false,",
    style: "muted",
  },

  {
    text: "Shopping 🛒: false",
    style: "muted",
  },

  {
    text: "}",
    style: "blue",
  },
];


/* =========================================================
   TECH STACK
   ========================================================= */

export const skills: Skill[] = [
  /* Languages */

  {
    name: "JavaScript",
    category: "language",
  },

  {
    name: "TypeScript",
    category: "language",
  },

  {
    name: "HTML",
    category: "language",
  },

  {
    name: "CSS",
    category: "language",
  },


  /* Frameworks */

  {
    name: "Next.js",
    category: "framework",
  },

  {
    name: "React",
    category: "framework",
  },

  {
    name: "React Native",
    category: "framework",
  },

  {
    name: "Express.js",
    category: "framework",
  },


  /* Libraries */

  {
    name: "Tailwind CSS",
    category: "library",
  },

  {
    name: "Redux",
    category: "library",
  },

  {
    name: "Redux Toolkit",
    category: "library",
  },

  {
    name: "Framer Motion",
    category: "library",
  },

  {
    name: "GSAP",
    category: "library",
  },

  {
    name: "TanStack Query",
    category: "library",
  },


  /* Tools */

  {
    name: "Git",
    category: "tool",
  },

  {
    name: "GitHub",
    category: "tool",
  },

  {
    name: "VS Code",
    category: "tool",
  },


  /* Platforms / Backend */

  {
    name: "Supabase",
    category: "platform",
  },

  {
    name: "REST APIs",
    category: "platform",
  },

  {
    name: "Vercel",
    category: "platform",
  },
];


/* =========================================================
   HOBBIES
   ========================================================= */

export const hobbies: Hobby[] = [
  {
    name: "Gaming",
    emoji: "🎮",
    active: true,
  },

  {
    name: "Trading",
    emoji: "📉",
    active: true,
  },

  {
    name: "Watching movies & series",
    emoji: "🎬",
    active: true,
  },

  {
    name: "Reading",
    emoji: "📖",
    active: false,
  },

  {
    name: "Shopping",
    emoji: "🛒",
    active: false,
  },
];


/* =========================================================
   DREAMS & GOALS
   ========================================================= */

export const dreams = {
  career: {
    label: "Long-term dream",
    description:
      "Build and own a technology company capable of creating products and solving problems at a global scale.",
  },

  companies: [
    "Microsoft",
    "Google",
    "Meta",
    "Tesla",
    "Leading technology companies across China and Japan",
  ],

  vacation: {
    label: "Dream vacation",
    description:
      "South Korea",
  },
};


/* =========================================================
   SOCIAL LINKS
   ========================================================= */

export const socials: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/Festus-123",
    username: "Festus-123",
  },

  {
    name: "X",
    url: "https://x.com/Othodo_X",
    username: "@Othodo_X",
  },

  {
    name: "LinkedIn",
    url: "",
    username: "",
  },
];


/* =========================================================
   COMPLETE PORTFOLIO DATA
   ========================================================= */

export const portfolioData: PortfolioData = {
  personal,
  about,
  codeIntro,
  skills,
  hobbies,
  dreams,
  socials,
};