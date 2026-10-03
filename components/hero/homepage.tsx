import Image from "next/image";

const Homepage = () => {
  return (
    <div className="bg-[radial-gradient(ellipse_at_center,#020617,#1e293b,#0f172a)] min-h-screen flex flex-col md:flex-row items-center justify-center text-white p-4 md:p-8">
      {/* my image */}
      {/* <div>
        <Image src="/forground.png" alt="My Image" width={500} height={300} />
      </div> */}

      {/* Welcome caption */}
      <div className="max-w-3xl text-center md:text-left">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold drop-shadow-lg text-center md:text-left">
            Hi, I&apos;m <span className="text-blue-500">Festus Phillip A.</span> <br />
        </h1>
        <p className="text-lg md:text-2xl drop-shadow-lg mt-2 text-center md:text-left">
            A fullstack developer with a passion for creating innovative and user-friendly web applications. I specialize in NextJS and Typescript technologies to build scalable and responsive web solutions.
        </p>
      </div>
    </div>
  );
};

export default Homepage;
