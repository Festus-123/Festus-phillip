import React from "react";
import { Metadata } from "next";
// import Hero_page from '@/components/hero/Hero_page'
import Hero from "@/components/hero/Hero";
import Introduction from "@/components/intro/Introduction";
import SelectedWorks from "@/components/project-preview/SelectedWorks";
import SkillsIntro from "@/components/skills/intro/SkillsIntro";
// import Logo from "@/components/hero/logo";
// import Sidebar from '@/components/sidebar/Sidebar'

export const metadata: Metadata = {
  title: "Festus Phillip Adebola https://festus-s-portfolio.vercel.app",
  description:
    "A Frontend Web Developer specialized in NextJS and Typescript technologies to build scalbel and responsive user friendly web applications",
  keywords: ["Portfolio", "Festus", "Frontend", "Developer", "ReactJS"],
  openGraph: {
    title: "Festus Frontend Developer",
    description: "A Frontend Web developer",
    siteName: "https://festus-s-portfolio.vercel.app",
    locale: "en_UK",
    type: "profile",
    images: [],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontend Developer",
    description: "A frontend web Developer",
    creator: "@Othodo_X",
    images: [],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

const Portfolio = async () => {
  await new Promise((resolve) => setTimeout(resolve, 300));

  return (
    <div className="">
      <Hero />
      <Introduction />
      <SelectedWorks />
      <SkillsIntro />
      {/* <Logo /> */}
    </div>
  );
};

export default Portfolio;
