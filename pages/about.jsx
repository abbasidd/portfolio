import Head from "next/head";
import Image from "next/image";
import aboutImage from "../public/usman.jpeg";
import { useTheme } from "next-themes";
import CategoryCard from "@/components/CategoryCard";
import love_black from "../public/love-black.svg";
import love_white from "../public/love-white.svg";
import Rocket from "../public/Rocket.svg";
import Polish from "../public/Polish.svg";
import Flash from "../public/Flash.svg";
import Sparkles from "../public/Sparkles.svg";
import Developer from "../public/Developer.svg";
import Weeb from "../public/Weeb.svg";
// import Weeb from "../public/Weeb.svg";
import laptopLight from "../public/laptopLight.svg";
import laptopBlack from "../public/laptopBlack.svg";
import { useEffect } from "react";

export default function About() {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    console.clear();
    console.log.apply(console, [
      "%c A brief intro about my self. Well a little brag about myself. 🐼\n",
      "color: #fff; background: #8000ff; padding:5px 0;",
    ]);
  }, []);

  return (
    <div className="px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
      <Head>
        <title>about ✦ usman aftab</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className="  max-w-screen ">
        <div className=" mx-auto pt-16 -pb-10 max-w-7xl">
          <div className=" mx-auto flex flex-col ">
            <h1
              className={`mt-6 mb-12 font-deca bg-gradient-to-br to-blue-500 via-red-400/90 from-yellow-500  bg-clip-text text-transparent selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold`}
            >
              About
            </h1>
            <div className="mx-auto transition-all duration-1000 ease-in-out -mt-8 dark:shadow-xs shadow-2xl dark:shadow-purple-50/10 shadow-purple-200 ">
              <Image
                src={aboutImage}
                placeholder="blur"
                height={600}
                width={600}
                className="rounded-2xl select-none drop-shadow-md shadow-purple-200 dark:shadow-orange-100/60 dark:drop-shadow-sm shadow-2xl h-28 w-28 md:h-32 md:w-32 lg:h-40 lg:w-40 border-white border-2"
                alt="Usman Aftab"
                priority
              />
            </div>
            <div className="text-center mx-auto mt-8 z-20">
              <h3 className="mx-auto  font-bold text-lg lg:text-xl xl:text-2xl">
                Usman Aftab{" "}
              </h3>
              <p className="text-gray-400 font-deca font-normal text-xs sm:text-sm md:text-md lg:text-lg ">
                Full Stack Developer{" "}
                <span className="inline-flex items-baseline">
                  <Image
                    src={Rocket}
                    alt="rocket"
                    className="self-center w-6 h-6 mx-1"
                  />
                </span>{" "}
              </p>
            </div>
          </div>
          <CategoryCard />
          <div className=" text-[0.92rem] md:text-base md:text-md lg:text-lg xl:text-xl mx-auto font-light dark:text-white text-gray-900 ">
            <p className="mt-6 mb-12 leading-10 font-normal">
              As a Fullstack Blockchain Engineer, my expertise lies in
              developing sophisticated decentralized applications and blockchain
              solutions. I bring proficiency in Next.js, Solidity for smart
              contract development, and Nest.js for backend functionality. My
              database skills encompass PostgreSQL and MongoDB, allowing me to
              manage complex data structures effectively. With a strong
              foundation in web technologies like HTML5, CSS3, and JavaScript, I
              excel in crafting large-scale web applications that adhere to
              design constraints, ensuring cross-browser compatibility and
              responsive user interfaces. My approach blends an elegant and
              efficient UI architecture with a focus on meeting the specific
              goals and needs of blockchain projects, resulting in seamless and
              user-friendly experiences. 🚀
            </p>

            <p className="text-gray-400 select-none font-semibold mb-1 dark:text-white/30 ">
              Contact
            </p>

            <p className="">
              While I may not be a widely recognized figure, i am readily
              available for connection on my social media platforms. <br />
              You can contact me on the{" "}
              <span className="text-red-700 font-bold">Gmail</span>{" "}
              <a
                onClick={() =>
                  navigator.clipboard.writeText("usman.dev1337@gmail.com")
                }
                className=" underline underline-offset-4 decoration-2 decoration-purple-400 group select-all font-semibold dark:hover:text-purple-400 hover:text-purple-700 cursor-pointer select "
                href="mailto:usman.dev1337@gmail.com"
              >
                {" "}
                usman.dev1337@gmail.com
              </a>{" "}
              or <span className="text-blue-700 font-bold">LinkedIn</span>{" "}
              <a
                href="http://linkedin.com/in/pranjalshikhar"
                className=" underline underline-offset-4 decoration-2 decoration-purple-400 font-semibold dark:hover:text-purple-400 hover:text-purple-700 cursor-pointer select"
                rel="noopener noreferrer"
                target="blank"
              >
                {" "}
                Usman Aftab{" "}
              </a>{" "}
              or you can DM me on{" "}
              <span className="text-orange-500 font-bold">Instagram</span>{" "}
              <a
                href="https://instagram.com/usman.aftab"
                target="blank"
                rel="noopener noreferrer"
                className=" font-semibold underline underline-offset-4 decoration-2 decoration-purple-400 dark:hover:text-purple-400 hover:text-purple-700 cursor-pointer select "
              >
                {" "}
                @usman.aftab{" "}
              </a>{" "}
            </p>
          </div>
          <div className="flex mx-auto justify-center mt-16 select-none">
            <span className="font-black font-app text-2xl md:text-3xl align-text-bottom tracking-wider mx-3 md:mx-6">
              Passionate
            </span>
            {currentTheme === "dark" ? (
              <Image src={love_white} alt="love" width="30" className="-mt-4" />
            ) : (
              <Image src={love_black} alt="love" width="30" className="-mt-4" />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
