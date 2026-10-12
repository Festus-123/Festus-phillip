import { StaticImageData } from 'next/image';
import { assets } from '../public/assets/asset';
export type ProjectType =
  | "frontend"
  | "backend"
  | "mobile"
  | "fullstack"
  | "automation"
  | "experiment";

export type ProjectStatus = "Live" | "In Development" | "Archived";

export type Project = {
  slug: string;
  name: string;
  image: string | StaticImageData;

  type: ProjectType;
  category: string;
  year: string;

  site?: string;
  github_site?: string;
  github: string;

  stacks: string[];

  tagline: string;
  description: string;

  role: string;

  highlights: string[];
  features: string[];

  status: ProjectStatus;
};

export type PROJECTSECTION = {
  type: string;
  title: string;
  description: string;
};

export const projectSections: PROJECTSECTION[] = [
  {
    type: "fullstack",
    title: "Full-stack",
    description:
      "Products where I worked across the interface, application logic, data, and the systems connecting everything together.",
  },
  {
    type: "frontend",
    title: "Front-end",
    description:
      "Interfaces focused on responsive layouts, interaction, animation, and turning ideas into polished digital experiences.",
  },
  {
    type: "backend",
    title: "Back-end",
    description:
      "Server-side systems, APIs, data flows, authentication, and the logic that keeps applications running behind the interface.",
  },
  {
    type: "mobile",
    title: "Mobile-app",
    description:
      "Mobile experiences built around practical interfaces, application logic, and the constraints of smaller screens.",
  },
  {
    type: "automation",
    title: "Automation",
    description:
      "Tools and experiments built to automate repetitive work, process information, or explore new technical ideas.",
  },
];

export const links: Project[] = [
  // =========================================================
  // FRONTEND / WEB
  // =========================================================

  {
    slug: "tax-master",
    name: "Tax Master",
    image: "/tax-master.png",

    type: "frontend",
    category: "Web Application",
    year: "2025",

    site: "https://tax-master.vercel.app/",
    github_site: "https://github.com/Festus-123/Tax-Master",
    github: "/github.jpg",

    stacks: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "html2image",
      "Sonner",
      "Responsive UI",
    ],

    tagline:
      "Making tax calculations less intimidating and easier to understand.",

    description:
      "Tax Master is a Nigerian tax estimation tool built to make tax calculations easier for everyday users. Instead of forcing users through complicated formulas, the application turns the process into a simple guided experience where users provide their financial information and receive an understandable estimate of their tax obligations.",

    role: "Designed and developed the frontend, calculation flow, responsive interface, result presentation, and user interaction system.",

    highlights: [
      "Built the tax calculation logic around the 2026 Nigerian tax rules used by the application.",
      "Designed a guided interface that breaks down a potentially complicated calculation into manageable steps.",
      "Created clear result displays so users can understand where their estimated figures come from.",
      "Built a responsive experience that works comfortably across desktop and mobile screens.",
    ],

    features: [
      "Tax estimation",
      "Interactive calculation flow",
      "Detailed tax breakdown",
      "Responsive interface",
      "Result sharing/export",
      "User-friendly notifications",
    ],

    status: "Live",
  },

  {
    slug: "phipest-bens",
    name: "Phipest-Bens International",
    image: "/phipest-bens2.png",

    type: "frontend",
    category: "Business Website",
    year: "2026",

    site: "https://phipest-bens.vercel.app/",
    github_site: "https://github.com/Festus-123/phipest-bens",
    github: "/github.jpg",

    stacks: ["Next.js", "TypeScript", "GSAP", "Tailwind CSS", "Responsive UI"],

    tagline: "Turning a multi-service company into a clear digital presence.",

    description:
      "Phipest-Bens International is a company operating across areas including construction and automobile sales. The challenge was not simply creating a website, but organizing several different services into an experience that visitors could understand quickly.",

    role: "Designed and developed the complete frontend experience, including page structure, responsive layouts, animations, service presentation, and enquiry flow.",

    highlights: [
      "Structured multiple business services into a clear navigation and content hierarchy.",
      "Used GSAP to introduce movement without letting animation distract from the company's information.",
      "Designed responsive layouts for visitors coming from both desktop and mobile devices.",
      "Created enquiry-focused sections so potential customers can quickly reach the company.",
    ],

    features: [
      "Company overview",
      "Construction services",
      "Automobile services",
      "Responsive layouts",
      "Animated interactions",
      "Customer enquiry flow",
      "Service presentation",
    ],

    status: "Live",
  },

  {
    slug: "weslime-auto-repair",
    name: "Weslime Auto Repair",
    image: "/weslime.png",

    type: "frontend",
    category: "Business Website",
    year: "2026",

    site: "https://weslime.vercel.app/",
    github_site: "https://github.com/Festus-123/weslime",
    github: "/github.jpg",

    stacks: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Responsive UI",
      "Sonner",
    ],

    tagline: "A digital front door for an automotive service business.",

    description:
      "Weslime Auto Repair provides services ranging from vehicle repairs and car washing to car parts and other automotive needs. The website was built to give the business a professional online presence while making it easier for customers to discover available services and make enquiries.",

    role: "Designed and developed the website structure, responsive interface, service sections, enquiry experience, and supporting interactions.",

    highlights: [
      "Organized several automotive services into a straightforward browsing experience.",
      "Focused the interface around customer enquiries and appointment requests.",
      "Built reusable responsive sections for service information and business content.",
      "Kept the visual design clean so users can quickly find the information they need.",
    ],

    features: [
      "Service catalogue",
      "Appointment enquiries",
      "Car repair services",
      "Car wash services",
      "Car parts information",
      "Responsive design",
      "Customer notifications",
    ],

    status: "Live",
  },

  {
    slug: "coolchef-nationwide-eats",
    name: "CoolChef Nationwide Eats",
    image: "/coolchef.png",

    type: "frontend",
    category: "Food & Restaurant",
    year: "2026",

    site: "https://coolchef-nationwide-eats.vercel.app/",
    github_site: "https://github.com/Festus-123/coolchef-nationwide-eats",
    github: "/github.jpg",

    stacks: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Responsive UI",
      "Sonner",
    ],

    tagline: "A food-focused experience built around discovering what to eat.",

    description:
      "CoolChef Nationwide Eats is a restaurant-focused website designed around food discovery and presentation. The interface brings recipes, dishes, and cooking content into one responsive experience, making it easy for visitors to browse meals and explore the content without unnecessary complexity.",

    role: "Designed and developed the frontend experience, responsive layouts, recipe presentation, and interactive UI elements.",

    highlights: [
      "Created a food-first interface where imagery and content work together.",
      "Designed responsive recipe and dish layouts for different screen sizes.",
      "Focused on clear navigation and readable food information.",
      "Built reusable UI patterns for presenting different dishes and recipes.",
    ],

    features: [
      "Recipe browsing",
      "Dish presentation",
      "Cooking content",
      "Responsive layouts",
      "Interactive UI",
      "Mobile-friendly experience",
    ],

    status: "Live",
  },

  // =========================================================
  // FULLSTACK / E-COMMERCE
  // =========================================================

  {
    slug: "mkclothing",
    name: "M & K Clothing",
    image: "/mk-clothing3.png",

    type: "fullstack",
    category: "E-commerce",
    year: "2025",

    site: "https://mkclothing-kna2.vercel.app/",
    github_site: "https://github.com/Festus-123/mkclothing",
    github: "/github.jpg",

    stacks: [
      "React",
      "JavaScript",
      "Supabase",
      "Tailwind CSS",
      "Responsive Design",
      "Dynamic UI",
      "Framer Motion",
      "Sonner",
      "Render",
    ],

    tagline:
      "A clothing storefront backed by a real product management system.",

    description:
      "M & K Clothing started as a storefront concept and grew into a functional e-commerce experience with dynamic product data. The application connects the customer-facing store to a management dashboard, allowing products and collections to be created, updated, and removed without manually changing the frontend.",

    role: "Designed and developed the customer storefront, product flows, responsive UI, Supabase integration, and dashboard functionality.",

    highlights: [
      "Connected the storefront to Supabase for dynamic product and collection data.",
      "Built an administrative dashboard for managing clothing products and collections.",
      "Created reusable product and collection interfaces instead of hardcoding storefront content.",
      "Added responsive interactions and motion to make browsing feel more polished.",
    ],

    features: [
      "Dynamic product catalogue",
      "Product management dashboard",
      "Collection management",
      "Supabase database integration",
      "Responsive shopping interface",
      "Interactive product browsing",
      "Notifications and feedback",
    ],

    status: "Live",
  },

  {
    slug: "wear-it-all-luxury",
    name: "Wear It All Luxury",
    image: "/wear-it-all2.png",

    type: "fullstack",
    category: "E-commerce",
    year: "2026",

    site: "https://wearitallluxury.vercel.app/",
    github_site: "https://github.com/Festus-123/wearitallluxury",
    github: "/github.jpg",

    stacks: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Responsive UI",
      "Sonner",
      "Supabase",
      "Brevo",
      "Render",
      "Zod",
    ],

    tagline:
      "A luxury fashion storefront with real data and customer interactions.",

    description:
      "Wear It All Luxury is a fashion e-commerce experience built around presenting products in a polished and accessible way. Beyond the storefront itself, the project connects to a backend system for managing data and uses validation and email services to support customer interactions.",

    role: "Designed and developed the storefront, responsive UI, product experience, Supabase integration, validation, and customer communication flow.",

    highlights: [
      "Connected the frontend to Supabase for dynamic application data.",
      "Built a responsive product-focused interface for browsing on different devices.",
      "Used Zod for structured input validation.",
      "Integrated Brevo to support customer-facing email communication.",
      "Designed the experience around a more premium visual presentation.",
    ],

    features: [
      "Product catalogue",
      "Dynamic data",
      "Supabase integration",
      "Customer forms",
      "Input validation",
      "Email communication",
      "Responsive storefront",
    ],

    status: "Live",
  },

  // =========================================================
  // BACKEND
  // =========================================================

  {
    slug: "reminder-api",
    name: "Reminder API",
    image: "R",

    type: "backend",
    category: "REST API",
    year: "2025",

    site: "https://reminders-api-production-75c3.up.railway.app/health",
    github_site: "https://github.com/Festus-123/reminders-api",
    github: "/github.jpg",

    stacks: ["Node.js", "Express", "Javascript", "Neon-DB", "Railway", "Vitest"],

    tagline: "An API for creating and managing reminders.",
    description:
      "Reminder API is a backend service designed to help users create, update, and manage reminders. It provides a structured and reusable REST API for reminder-related operations.",
    role: "Designed and developed the API, data model, business logic, and backend service structure.",

    highlights: [
      "Built a REST API for reminder creation and management.",
      "Structured the backend around reusable routes and controllers.",
      "Implemented persistent data storage with PostgreSQL.",
    ],

    features: [
      "REST API",
      "Reminder management",
      "Data persistence",
      "CRUD operations",
      "Backend validation",
    ],

    status: "Live",
  },

  {
    slug: "ticketpass-api",
    name: "TicketPass API",
    image: "TCP",

    type: "backend",
    category: "Event Ticketing API",
    year: "2025",

    site: "https://ticketpass-api-production.up.railway.app/health",
    github_site: "https://github.com/Festus-123/TicketPass-api",
    github: "/github.jpg",

    stacks: ["Node.js", "Express", "Javascript", "Neon-DB", "PostgressSQl", "SQLite"],

    tagline: "A backend for booking and managing event tickets.",
    description:
      "TicketPass API is an event ticketing backend that supports ticket booking and related event-management operations. It provides the API foundation for an application focused on making event ticket transactions organized and accessible.",
    role: "Designed and developed the ticketing API, booking flow, data model, and application backend logic.",

    highlights: [
      "Built an API for booking tickets to events.",
      "Structured event and ticket data for reliable backend operations.",
      "Created a reusable backend foundation for ticket-related features.",
    ],

    features: [
      "Event ticket booking",
      "Ticket management",
      "REST API",
      "Database integration",
      "Backend business logic",
    ],

    status: "Live",
  },

  // {
  //   slug: "campus-lost-and-found-api",
  //   name: "Campus Lost & Found API",
  //   image: "CLF",

  //   type: "backend",
  //   category: "REST API",
  //   year: "2025",

  //   github: "/github.jpg",

  //   stacks: [
  //     "Node.js",
  //     "Express",
  //     "TypeScript",
  //     "PostgreSQL",
  //   ],

  //   tagline: "A backend for reporting and resolving lost campus items.",
  //   description:
  //     "Campus Lost & Found API is a backend service for reporting lost items, recording found items, and managing related records within a campus community. It provides a structured API for handling item reports and status updates.",
  //   role:
  //     "Designed and developed the API, reporting workflow, data model, and backend service logic.",

  //   highlights: [
  //     "Built an API for reporting lost and found items.",
  //     "Supported structured records for item listings and updates.",
  //     "Created a reusable backend workflow for campus item management.",
  //   ],

  //   features: [
  //     "Lost item reports",
  //     "Found item records",
  //     "Item status management",
  //     "REST API",
  //     "Database integration",
  //   ],

  //   status: "Live",
  // },

  // =========================================================
  // MOBILE
  // =========================================================

  {
    slug: "medical-health-track",
    name: "Medical Health Track",
    image: assets.medicalHealthTrack,

    type: "mobile",
    category: "Mobile Application",
    year: "2025",

    github_site: "https://github.com/Festus-123/Medical-Health-Track",
    github: "/github.jpg",

    stacks: ["React Native", "Expo", "Javascript", "Stylesheet", "Redux"],

    tagline:
      "A mobile app for tracking health routines and medical information.",
    description:
      "Medical Health Track is a mobile application designed to help users organize health-related information, monitor daily wellness habits, and keep useful medical details in one place.",
    role: "Designed and developed the mobile interface, health tracking workflow, data organization, and app experience.",

    highlights: [
      "Built a mobile experience for managing health-related records.",
      "Created a streamlined interface for tracking daily wellness activities.",
      "Organized medical information in an accessible and user-friendly format.",
    ],

    features: [
      "Health tracking",
      "Medical information management",
      "Daily wellness routines",
      "Mobile interface",
      "Local data storage",
    ],

    status: "Live",
  },

  {
    slug: "reminder-app",
    name: "Reminder App",
    image: assets.remindersApp,

    type: "mobile",
    category: "Mobile Application",
    year: "2025",

    github_site: "https://github.com/Festus-123/Reminder-App",
    github: "/github.jpg",

    stacks: [
      "React Native",
      "Expo",
      "TypeScript",
      "Stylesheet",
      "AsyncStorage",
      "React-hooks"
    ],

    tagline: "A mobile app for creating and managing reminders.",
    description:
      "Reminder App is a mobile application for creating, viewing, and managing reminders. It provides a simple interface for organizing personal tasks and time-sensitive activities.",
    role: "Designed and developed the mobile interface, reminder workflow, and persistent local data handling.",

    highlights: [
      "Built a clean reminder creation and management experience.",
      "Used local storage to keep reminder data available on the device.",
      "Designed the app for quick access and simple task organization.",
    ],

    features: [
      "Create reminders",
      "Manage reminders",
      "Local persistence",
      "Mobile-friendly interface",
      "Task organization",
    ],

    status: "Live",
  },

  // {
  //   slug: "campus-lost-and-found-mobile",
  //   name: "Campus Lost & Found",
  //   image: "/project-image.png",

  //   type: "mobile",
  //   category: "Mobile Application",
  //   year: "2025",

  //   github: "/github.jpg",

  //   stacks: [
  //     "React Native",
  //     "Expo",
  //     "TypeScript",
  //     "NativeWind",
  //     "REST API",
  //   ],

  //   tagline: "A mobile way to report and resolve lost campus items.",
  //   description:
  //     "Campus Lost & Found is a mobile application that allows users to report lost items, record found items, and follow the status of related cases within a campus community.",
  //   role:
  //     "Designed and developed the mobile interface, reporting workflow, item-status experience, and API integration.",

  //   highlights: [
  //     "Built a mobile workflow for reporting lost and found items.",
  //     "Created an accessible interface for tracking item status.",
  //     "Connected the app to a backend service for reliable record management.",
  //   ],

  //   features: [
  //     "Report lost items",
  //     "Record found items",
  //     "Track item status",
  //     "Mobile interface",
  //     "API integration",
  //   ],

  //   status: "Live",
  // },

  // =========================================================
  // AUTOMATION / PYTHON
  // =========================================================

  // I prefer "Automation" as the project type rather than
  // "Python", because Python is the technology, not the purpose.
//
  {
    slug: "logforge",
    name: "LOGFORGE",
    image: assets.logforge,

    type: "automation",
    category: "Automation",
    year: "2025",

    github: "/github.jpg",

    stacks: ["Python", "NumPy", "argparse", "Command-line Automation"],

    tagline: "A Python-based command-line tool for automated log processing.",
    description:
      "LOGFORGE is a Python automation project built to process and organize log data through a command-line interface. It uses Python libraries to support efficient data handling and configurable automation workflows.",
    role: "Designed and developed the automation workflow, command-line interface, data processing logic, and project structure.",

    highlights: [
      "Built a Python-based automation tool for log processing.",
      "Used argparse to create a flexible command-line interface.",
      "Used NumPy for efficient numerical data handling and processing.",
    ],

    features: [
      "Log processing",
      "Command-line interface",
      "Python automation",
      "NumPy integration",
      "Configurable workflows",
    ],

    status: "Live",
  },

  // =========================================================
  // EXPERIMENTS
  // =========================================================

  // {
  //   slug: "project-name",
  //   name: "Project Name",
  //   image: "/project-image.png",
  //
  //   type: "experiment",
  //   category: "Experiment",
  //   year: "2026",
  //
  //   github_site: "https://github.com/...",
  //   github: "/github.jpg",
  //
  //   stacks: [],
  //
  //   tagline: "...",
  //   description: "...",
  //   role: "...",
  //
  //   highlights: [],
  //   features: [],
  //
  //   status: "Archived",
  // },
];
