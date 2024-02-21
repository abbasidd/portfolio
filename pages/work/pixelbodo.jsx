/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import { FiFileText } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

export default function PixelBodo() {
  return (
    <div className="px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
      <Head>
        <title>PixelBodo ✦ work</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className="  max-w-screen ">
        <div className=" mx-auto pt-16 -pb-10 max-w-7xl">
          <div className=" mx-auto flex flex-col text-center justify-center">
            <h1
              className={`mt-6 mb-12 font-deca bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900 bg-clip-text text-transparent selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold`}
            >
              PixelBodo
            </h1>
          </div>
          <div className=" mx-auto flex flex-col text-center justify-center">
            <h4
              className={`mb-12 font-deca bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-300 via-fuchsia-600 to-orange-600 bg-clip-text text-transparent selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-base md:text-lg lg:text-lg xl:text-lg font-bold`}
            >
              PixelBodo
            </h4>
          </div>
          <div className="flex justify-center space-x-3 md:space-x-6 lg:space-x-8 items-center  my-4">
            <div className="group border-purple-400 hover:bg-purple-400 hover:text-white hover:drop-shadow-2xl text-purple-500 rounded-md md:rounded-xl px-2 py-1 md:px-4 md:py-2 shadow-md drop-shadow-lg dark:bg-purple-400 dark:shadow-none dark:hover:shadow-white select-none dark:text-white shadow-purple-300 ">
              <button
                target="_blank"
                className="flex opacity-50 cursor-not-allowed items-center font-normal lg:font-bold space-x-2 text-sm md:text-base"
                onClick={() =>
                  alert("Ash Ketchum asked you to open in desktop browser.. 🚀")
                }
              >
                <FiFileText className="dark:stroke-white stroke-purple-400 stroke-2 group-hover:stroke-white " />
                <p>Live</p>
              </button>
            </div>
            <div className=" group border-blue-400 hover:bg-blue-400 text-blue-500 hover:text-white hover:drop-shadow-2xl rounded-md md:rounded-xl px-2 py-1 md:px-4 md:py-2 shadow-md drop-shadow-lg dark:bg-blue-400 dark:shadow-none dark:hover:shadow-white select-none dark:text-white shadow-blue-300">
              <button
                target="_blank"
                className="flex opacity-50 cursor-not-allowed items-center font-normal lg:font-bold space-x-2 text-sm md:text-base  "
              >
                <FaGithub className=" dark:stroke-white stroke-blue-400 stroke-2 group-hover:stroke-white " />
                <p>Code</p>
              </button>
            </div>
          </div>
          <div className=" mx-auto flex flex-col ">
            <h4
              className={`mt-10 only:mb-12 font-deca bg-gradient-to-br bg-clip-text selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-sm md:text-lg lg:text-lg xl:text-lg `}
            >
              PixelBodo, launched in February 2021, is a social media platform
              specifically designed to bridge the gap between users seeking
              design solutions and talented designers. Our dedicated team played
              a pivotal role in the backend development, utilizing the robust
              capabilities of Django for server-side logic and functionality. We
              carefully designed and implemented the database using PostgreSQL,
              ensuring efficient data storage and management. Additionally, we
              integrated the front-end with React, creating a seamless and
              user-friendly experience.
            </h4>
            <h4
              className={`mt-10 only:mb-12 font-deca bg-gradient-to-br bg-clip-text selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-sm md:text-lg lg:text-lg xl:text-lg `}
            >
              PixelBodo goes beyond simply connecting individuals – it fosters a
              vibrant community driven by creativity and collaboration. With its
              intuitive interface and powerful backend architecture, PixelBodo
              empowers users to easily discover and connect with designers who
              bring their visions to life. Our commitment to using
              industry-leading technologies and innovative design principles has
              resulted in a platform that is both reliable and enjoyable to use.
            </h4>
            <h4
              className={`mt-10 only:mb-12 font-deca bg-gradient-to-br bg-clip-text selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-sm md:text-lg lg:text-lg xl:text-lg `}
            >
              Key achievements: Developed robust backend logic and functionality
              using Django. Designed and implemented efficient data storage and
              management using PostgreSQL. Integrated user-friendly front-end
              with React. Created a thriving community for design discovery and
              collaboration. PixelBodo stands as a testament to our team's
              expertise in utilizing cutting-edge technologies to develop
              impactful solutions. We are proud to have contributed to a
              platform that empowers users and designers to unlock their
              creative potential.
            </h4>
          </div>
        </div>
      </main>
    </div>
  );
}
