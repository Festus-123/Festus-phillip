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
    id: "projects",
    label: "Projects",
    href: "/projects",
    icon: FolderKanban,
  },
  // {
  //   id: "stories",
  //   label: "Stories",
  //   href: "/stories",
  //   icon: Sparkles,
  // },
  {
    id: "resume",
    label: "Resume",
    href: "https://drive.google.com/file/d/14z9tkaJtv9_S3YpeBowFO5kl3Ph0xuAG/view?usp=sharing",
    icon: FileText,
  },
  {
    id: "contact",
    label: "Contact",
    href: "#contact",
    icon: Mail,
  },
];