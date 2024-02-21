/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import { FiFileText } from "react-icons/fi";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function ExtraHour() {
  return (
    <div className="px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
      <Head>
        <title>ExtraHour ✦ FYP</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className="  max-w-screen ">
        <div className=" mx-auto pt-16 -pb-10 max-w-7xl">
          <div className=" mx-auto flex flex-col text-center justify-center">
            <h1
              className={`mt-6 mb-12 font-deca bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900 bg-clip-text text-transparent selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold`}
            >
              ExtraHour
            </h1>
          </div>
          <div className=" mx-auto flex flex-col text-center justify-center">
            <h4
              className={`mb-12 font-deca bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-300 via-fuchsia-600 to-orange-600 bg-clip-text text-transparent selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-base md:text-lg lg:text-lg xl:text-lg font-bold`}
            >
              Freelancing Platform FYP
            </h4>
          </div>
          <div className="flex justify-center space-x-3 md:space-x-6 lg:space-x-8 items-center  my-4">
            <div className="group opacity-50 border-purple-400 hover:bg-purple-400 hover:text-white hover:drop-shadow-2xl text-purple-500 rounded-md md:rounded-xl px-2 py-1 md:px-4 md:py-2 shadow-md drop-shadow-lg dark:bg-purple-400 dark:shadow-none dark:hover:shadow-white select-none dark:text-white shadow-purple-300 ">
              <button
                href=""
                disabled="true"
                target="_blank"
                className="flex items-center cursor-not-allowed font-normal lg:font-bold space-x-2 text-sm md:text-base"
              >
                <FiFileText className="dark:stroke-white stroke-purple-400 stroke-2 group-hover:stroke-white " />
                <p>Live</p>
              </button>
            </div>
            <div className=" group border-blue-400 hover:bg-blue-400 text-blue-500 hover:text-white hover:drop-shadow-2xl rounded-md md:rounded-xl px-2 py-1 md:px-4 md:py-2 shadow-md drop-shadow-lg dark:bg-blue-400 dark:shadow-none dark:hover:shadow-white select-none dark:text-white shadow-blue-300">
              <Link
                href="https://github.com/abbasidd/ExtraHour-a-freelancing-website."
                target="_blank"
                className="flex items-center font-normal lg:font-bold space-x-2 text-sm md:text-base  "
              >
                <FaGithub className=" dark:stroke-white stroke-blue-400 stroke-2 group-hover:stroke-white " />
                <p>Code</p>
              </Link>
            </div>
          </div>
          <div className=" mx-auto flex flex-col ">
            <h4
              className={`mt-10 only:mb-12 font-deca bg-gradient-to-br bg-clip-text selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-sm md:text-lg lg:text-lg xl:text-lg `}
            >
              I'm thrilled to introduce you to ExtraHour, my final year project
              a testament to my passion for web development and a valuable
              addition to my portfolio. Built with the robust Django framework,
              ExtraHour empowers both freelancers and clients to navigate the
              freelancing landscape seamlessly.
            </h4>
            <h4
              className={`mt-10 only:mb-12 font-deca bg-gradient-to-br bg-clip-text selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-sm md:text-lg lg:text-lg xl:text-lg `}
            >
              ExtraHour goes beyond static communication, fostering dynamic
              interactions through its chat feature. This real-time
              functionality is made possible by the magic of Django Channels,
              allowing freelancers and clients to connect instantly, clarify
              project details, and build rapport throughout the collaboration
              process. While I leveraged the efficiency of static HTML for
              presentation elements, Django served as the powerful backend
              engine. This strategic combination allowed me to craft a visually
              appealing and dynamic platform, ensuring a smooth user experience
            </h4>
            <h4
              className={`mt-10 only:mb-12 font-deca bg-gradient-to-br bg-clip-text selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-sm md:text-lg lg:text-lg xl:text-lg `}
            >
              Mastery of Django's ORM shines through in the elegant and
              efficient queries that power ExtraHour. From matching freelancers
              to ideal jobs based on skills and experience to filtering
              proposals according to client requirements, the platform
              seamlessly interacts with the database thanks to my well-honed
              query writing skills. Developing ExtraHour pushed my boundaries,
              honing my coding skills and deepening my understanding of Django's
              intricacies. I tackled challenges head-on, experimenting with
              different approaches and ultimately creating a project I'm truly
              proud of.
            </h4>
          </div>
        </div>
      </main>
    </div>
  );
}
