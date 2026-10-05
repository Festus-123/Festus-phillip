export type SkillCategory = {
  id: string;
  number: string;
  title: string;
  description: string;
  skills: string[];
  accent: "blue" | "gold" | "ink";
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    number: "01",
    title: "Frontend",
    description:
      "Building responsive interfaces with strong structure, interaction, and visual polish.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "GSAP",
      "Framer Motion",
      "shadcn/ui",
    ],
    accent: "ink",
  },
  {
    id: "backend",
    number: "02",
    title: "Backend",
    description:
      "Creating APIs, server logic, authentication flows, and the systems behind applications.",
    skills: [
      "Node.js",
      "Express",
      "REST APIs",
      "Authentication",
      "Server-side Logic",
    ],
    accent: "blue",
  },
  {
    id: "mobile",
    number: "03",
    title: "Mobile Apps",
    description:
      "Taking the same product thinking into mobile experiences with React Native.",
    skills: [
      "React Native",
      "Expo",
      "NativeWind",
      "Redux Toolkit",
      "Mobile UI",
    ],
    accent: "gold",
  },
  {
    id: "testing",
    number: "04",
    title: "Testing",
    description:
      "Writing tests that help applications stay predictable as features and codebases grow.",
    skills: [
      "Jest",
      "Vitest",
      "Supertest",
      "Unit Testing",
      "API Testing",
    ],
    accent: "blue",
  },
  {
    id: "automation",
    number: "05",
    title: "Automation & Python",
    description:
      "Using Python to automate repetitive work and explore asynchronous and computational workflows.",
    skills: [
      "Python",
      "Asyncio",
      "Threading",
      "Multiprocessing",
      "NumPy",
      "Automation",
    ],
    accent: "ink",
  },
  {
    id: "saas-baas",
    number: "06",
    title: "SaaS / BaaS",
    description:
      "Working with the services and infrastructure that turn interfaces into complete products.",
    skills: [
      "Supabase",
      "PostgreSQL",
      "Authentication",
      "Database Design",
      "Storage",
      "APIs",
    ],
    accent: "gold",
  },
  {
    id: "tools",
    number: "07",
    title: "Tools & Workflow",
    description:
      "The tools I use to build, collaborate, deploy, and maintain projects.",
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "Figma",
      "VS Code",
    ],
    accent: "blue",
  },
];