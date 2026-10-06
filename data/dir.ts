import {
  BriefcaseBusiness,
  FileText,
  FolderKanban,
  House,
  Mail,
  Sparkles,
  Wrench,
} from "lucide-react";

export type DirItem = {
  id: string;
  label: string;
  href: string;
  icon: typeof House;
};

export const dirItems: DirItem[] = [
  {
    id: "portfolio",
    label: "Portfolio",
    href: "/",
    icon: House,
  },
  {
    id: "about",
    label: "About",
    href: "/about",
    icon: BriefcaseBusiness,
  },
  {
    id: "tools",
    label: "Tools",
    href: "/tools",
    icon: Wrench,
  },
  {
    id: "projects",
    label: "Projects",
    href: "/projects",
    icon: FolderKanban,
  },
  {
    id: "stories",
    label: "Stories",
    href: "/stories",
    icon: Sparkles,
  },
  {
    id: "resume",
    label: "Resume",
    href: "/resume",
    icon: FileText,
  },
  {
    id: "contact",
    label: "Contact",
    href: "#contact",
    icon: Mail,
  },
];