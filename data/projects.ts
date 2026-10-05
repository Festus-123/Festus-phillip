export type Project = {
  slug: string;
  name: string;
  image: string;

  site?: string;
  github_site?: string;
  github: string;

  category: string;
  year: string;

  stacks: string[];

  tagline: string;
  description: string;

  role: string;

  highlights: string[];
  features: string[];

  status: "Live" | "In Development" | "Archived";
};

export const links: Project[] = [
  {
    slug: "tax-master",
    name: "Tax Master",
    image: "/tax-master.png",

    site: "https://tax-master.vercel.app/",
    github_site: "https://github.com/Festus-123/Tax-Master",
    github: "/github.jpg",

    category: "Web Application",
    year: "2026",

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
      "Tax Master is a Nigerian tax estimation tool built to make tax calculations easier for everyday users. Instead of forcing users to work through complicated formulas, the application turns the process into a simple guided experience where users provide their financial information and receive an understandable estimate of their tax obligations.",

    role:
      "Designed and developed the frontend, calculation flow, responsive interface, result presentation, and user interaction system.",

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
    slug: "mkclothing",
    name: "M & K Clothing",
    image: "/mk-clothing3.png",

    site: "https://mkclothing-kna2.vercel.app/",
    github_site: "https://github.com/Festus-123/mkclothing",
    github: "/github.jpg",

    category: "E-commerce",
    year: "2026",

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
      "M & K Clothing started as a storefront concept and grew into a functional e-commerce experience with dynamic product data. The application connects the customer-facing store to a management dashboard, allowing products and collections to be created, updated, and removed without having to manually change the frontend.",

    role:
      "Designed and developed the customer storefront, product flows, responsive UI, Supabase integration, and dashboard functionality.",

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
    slug: "phipest-bens",
    name: "Phipest-Bens International",
    image: "/phipest-bens2.png",

    site: "https://phipest-bens.vercel.app/",
    github_site: "https://github.com/Festus-123/phipest-bens",
    github: "/github.jpg",

    category: "Business Website",
    year: "2026",

    stacks: [
      "Next.js",
      "TypeScript",
      "GSAP",
      "Tailwind CSS",
      "Responsive UI",
    ],

    tagline:
      "Turning a multi-service company into a clear digital presence.",

    description:
      "Phipest-Bens International is a company operating across areas including construction and automobile sales. The challenge was not simply creating a website, but organizing several different services into an experience that visitors could understand quickly. The result is a responsive company website focused on clarity, presentation, and making enquiries easier.",

    role:
      "Designed and developed the complete frontend experience, including page structure, responsive layouts, animations, service presentation, and enquiry flow.",

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

    site: "https://weslime.vercel.app/",
    github_site: "https://github.com/Festus-123/weslime",
    github: "/github.jpg",

    category: "Business Website",
    year: "2026",

    stacks: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Responsive UI",
      "Sonner",
    ],

    tagline:
      "A digital front door for an automotive service business.",

    description:
      "Weslime Auto Repair provides services ranging from vehicle repairs and car washing to car parts and other automotive needs. The website was built to give the business a professional online presence while making it easier for customers to discover available services, understand what the company offers, and make enquiries or appointments.",

    role:
      "Designed and developed the website structure, responsive interface, service sections, enquiry experience, and supporting interactions.",

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

    site: "https://coolchef-nationwide-eats.vercel.app/",
    github_site:
      "https://github.com/Festus-123/coolchef-nationwide-eats",
    github: "/github.jpg",

    category: "Food & Restaurant",
    year: "2026",

    stacks: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Responsive UI",
      "Sonner",
    ],

    tagline:
      "A food-focused experience built around discovering what to eat.",

    description:
      "CoolChef Nationwide Eats is a restaurant-focused website designed around food discovery and presentation. The interface brings recipes, dishes, and cooking content into one responsive experience, making it easy for visitors to browse meals and explore the content without getting lost in unnecessary complexity.",

    role:
      "Designed and developed the frontend experience, responsive layouts, recipe presentation, and interactive UI elements.",

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

  {
    slug: "wear-it-all-luxury",
    name: "Wear It All Luxury",
    image: "/wear-it-all2.png",

    site: "https://wearitallluxury.vercel.app/",
    github_site: "https://github.com/Festus-123/wearitallluxury",
    github: "/github.jpg",

    category: "E-commerce",
    year: "2026",

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

    role:
      "Designed and developed the storefront, responsive UI, product experience, Supabase integration, validation, and customer communication flow.",

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
];