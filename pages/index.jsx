import { useTheme } from "next-themes";
import Blob from "@/components/Blob";
import Image from "next/image";
import Avatar_Black from "../public/Avatar-black.svg";
import logo from "../public/logo.png";
import Avatar_White from "../public/Avatar-white.svg";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Usman ✦ Full Stack Developer</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="lg:min-h-screen px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
        <div className="lg:h-screen 2xl:h-max max-w-[90rem] mx-auto">
          <Blob />
          <div className="flex flex-row justify-start items-center mt-20">
            <Image
              src={logo}
              alt="usmanaftab"
              width="100"
              height="100"
              className="rounded-full"
            />
            <div className="flex flex-col ml-4">
              <h2 className="font-bold sm:text-2xl md:text-2xl lg:text-4xl">
                Usman Aftab
              </h2>
              <h4 className="text-gray-400 xl:font-bold sm:font-bold md:font-bold sm:text-xl md:text-xl lg:text-2xl">
                Full Stack Developer
              </h4>
            </div>
          </div>
          <div className="mt-12 m:text-xl md:text-xl lg:text-2xl">
            <p className="font-light sm:leading-6 md:leading-6 lg:leading-8">
              A Full-stack Software Engineer based in{" "}
              <span className="font-medium select-none animate-text bg-gradient-to-br from-[#e9f6e9] dark:from-[#3afc6b] via-[#fff4f4] dark:via-[#fff] dark:text-black   to-[#43ff36] dark:to-[#12ff02] rounded px-2 py-[0.05rem] ">
                Pakistan
              </span>{" "}
              Who bring expertise in Blockchain, Node.js, and Python. Skilled in
              creating collaborative work environments, developing advanced web
              applications across platforms, and designing scalable databases
              with cutting-edge technologies. Passionate about exploring new
              technologies and staying up-to-date with industry trends. With my
              proficiency in these skills, I am ready to contribute to your
              organization&apos;s growth and success.
            </p>
          </div>
        </div>
        <div className="mt-28 mx-auto">
          <Experience />
        </div>
        <div className="mt-28 mx-auto ">
          <Contact />
        </div>
      </div>
    </>
  );
}
