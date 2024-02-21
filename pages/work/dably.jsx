/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import { FiFileText } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
export default function dably() {
  return (
    <div className="px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
      <Head>
        <title>DAB;LY ✦ work</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className="  max-w-screen ">
        <div className=" mx-auto pt-16 -pb-10 max-w-7xl">
          <div className=" mx-auto flex flex-col text-center justify-center">
            <h1
              className={`mt-6 mb-12 font-deca bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900 bg-clip-text text-transparent selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold`}
            >
              DAB;LY
            </h1>
          </div>
          <div className=" mx-auto flex flex-col text-center justify-center">
            <h4
              className={`mb-12 font-deca bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-300 via-fuchsia-600 to-orange-600 bg-clip-text text-transparent selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-base md:text-lg lg:text-lg xl:text-lg font-bold`}
            >
              DAB;LY - finance space by intertwining precious metal
            </h4>
          </div>
          <div className="flex justify-center space-x-3 md:space-x-6 lg:space-x-8 items-center  my-4">
            <div className="group border-purple-400 hover:bg-purple-400 hover:text-white hover:drop-shadow-2xl text-purple-500 rounded-md md:rounded-xl px-2 py-1 md:px-4 md:py-2 shadow-md drop-shadow-lg dark:bg-purple-400 dark:shadow-none dark:hover:shadow-white select-none dark:text-white shadow-purple-300 ">
              <button
                target="_blank"
                className="flex opacity-50 cursor-not-allowed items-center font-normal lg:font-bold space-x-2 text-sm md:text-base"
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
              Building Bridges Between Finance and Technology: The Microservice
              Architecture of DAB:LY DAB:LY's ambition to revolutionize the
              finance space by intertwining precious metals, cryptocurrencies,
              and DeFi demanded a robust and future-proof foundation. Our team
              meticulously built the backend infrastructure utilizing a
              microservices architecture, ensuring efficiency, scalability, and
              security.
            </h4>
            <h4
              className={`mt-10 only:mb-12 font-deca bg-gradient-to-br bg-clip-text selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-sm md:text-lg lg:text-lg xl:text-lg `}
            >
              This strategic approach divided the platform into four distinct
              services, each with a focused purpose: Authentication Service:
              Nestled at the core, this service stood guard, seamlessly handling
              user verification and access control, ensuring only authorized
              individuals could participate in the platform's offerings. Data
              Service (ETL): Acting as the data powerhouse, this service
              tirelessly transformed raw data into meaningful insights,
              leveraging the power of Extract, Transform, and Load (ETL)
              processes to fuel the platform's operations. Notification Service:
              Keeping everyone informed, this service sent real-time updates and
              notifications, fostering transparency and prompt communication
              within the DAB:LY ecosystem. Fiat Service: Bridging the gap
              between the digital realm of crypto and traditional finance, this
              service facilitated seamless interactions with fiat currencies,
              ensuring wider accessibility and adoption.
            </h4>
            <h4
              className={`mt-10 only:mb-12 font-deca bg-gradient-to-br bg-clip-text selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-sm md:text-lg lg:text-lg xl:text-lg `}
            >
              By adopting Nest.js, a robust Node.js framework, we laid the
              foundation for this microservices architecture. Coupled with
              PostgreSQL for data storage and TypeORM for efficient
              object-relational mapping, we ensured a secure and performant
              backend, laying the groundwork for DAB:LY's innovative vision.
            </h4>
          </div>
        </div>
      </main>
    </div>
  );
}
