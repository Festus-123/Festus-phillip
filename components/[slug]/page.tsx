// import React from "react";
// import Link from "next/link";
// import { notFound } from "next/navigation";
// import { links } from "@/data/projects";
// import { FiArrowUpRight, FiArrowLeft } from "react-icons/fi";
// import Image from "next/image";

// const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
//   const { slug } = await params;
//   const project = links.find((p) => p.slug === slug);
//   const index = links.findIndex((p) => p.slug === slug);

//   if (!project) return notFound();

//   const prev = links[index - 1];
//   const next = links[index + 1];

//   return (
//     <div
//       style={{
//         backgroundImage: "url(/white-paper.jpg)",
//         backgroundAttachment: "fixed",
//       }}
//       className="w-full flex flex-col  text-white/80 items-center justify-center gap-10"
//     >
//       {/* Projects  container*/}
//       <div className="bg-[#121212] md:p-8 w-full h-full flex flex-col items-start gap-10 md:gap-20 ">
//         <Link
//           href="/projects"
//           className="p-2 text-xl md:text-3xl text-white bg-white/5 rounded-full sticky top-5"
//         >
//           <FiArrowLeft />
//         </Link>
//         <h1 className={`font-extrabold text-4xl md:text-7xl mt-10 md:mt-0 p-4`}>
//           {project.name}
//         </h1>
//         <div className="flex flex-row flex-wrap gap-5 text-lg font-light md:text-xl p-4">
//           {project.stacks.map((stack, index) => (
//             <p
//               key={index}
//               className=" py-1 px-4 md:px-8 rounded-full border border-[#ffffff41]"
//             >
//               {stack}
//             </p>
//           ))}
//         </div>
//         <div className="flex md:flex-row-reverse flex-col-reverse gap-20 md:gap-10 ">
//           <div className="w-full md:w-[50%] p-4 md:p-8">
//             <h1 className="font-light tracking-wide text-xl md:text-2xl text-justify leading-relaxed">
//               {project.description}
//             </h1>

//             <div className="flex flex-row items-center gap-5 py-4 md:py-8">
//               {project.site && (
//                 <Link
//                   className="font-extrabold text-2xl md:text-4xl cursor-pointer"
//                   href={project.site}
//                 >
//                   <FiArrowUpRight />
//                 </Link>
//               )}
//               {project.github_site && (
//                 <Link className="cursor-pointer" href={project.github_site}>
//                   <Image
//                     loading="lazy"
//                     src={project.github}
//                     alt={project.github}
//                     width={25}
//                     height={25}
//                     className=" rounded-full"
//                   />
//                 </Link>
//               )}
//             </div>
//           </div>
//           <div className="w-full md:w-[50%] md:p-8">
//             <Image
//               width={700}
//               height={500}
//               src={project.image}
//               alt="slug image"
//               className=""
//             />
//           </div>
//         </div>
//         <div className={`w-full flex text-white/80 relative mt-10 md:mt-5 `}>
//           {prev && (
//             <Link
//               href={`/projects/${prev.slug}`}
//               className={`flex flex-row gap-2 absolute left-0 bottom-1`}
//             >
//               <sup className="text-sm md:text-xs">
//                 {prev.name.slice(0, 3)}...
//               </sup>
//               <span className="font-extrabold text-xl md:text-2xl ">PREV</span>
//             </Link>
//           )}
//           {next && (
//             <Link
//               href={`/projects/${next.slug}`}
//               className={`flex flex-row gap-2 absolute right-0 bottom-1`}
//             >
//               <span className="font-extrabold text-xl md:text-2xl ">NEXT</span>
//               <sup className="text-sm md:text-xs">
//                 {next.name.slice(0, 3)}...
//               </sup>
//             </Link>
//           )}
//         </div>
//       </div>
//       <div className="p-24"></div>
//     </div>
//   );
// };

// export default page;

import ProjectSlug from "@/components/slug/ProjectSlug";

const page = () => {
  return (
    <div>
      <ProjectSlug />
    </div>
  );
}

export default page;