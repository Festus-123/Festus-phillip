import { Metadata } from "next";
import About from "@/components/about/About";

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

const page = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <div>
      {/* <About_Me /> */}
      <About />
    </div>
  );
};

export default page;
