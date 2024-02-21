/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import { FiFileText } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
export default function WorkAsPro() {
  return (
    <div className="px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
      <Head>
        <title>WorkAsPro ✦ work</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className="  max-w-screen ">
        <div className=" mx-auto pt-16 -pb-10 max-w-7xl">
          <div className=" mx-auto flex flex-col text-center justify-center">
            <h1
              className={`mt-6 mb-12 font-deca bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900 bg-clip-text text-transparent selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold`}
            >
              WorkAsPro
            </h1>
          </div>
          <div className=" mx-auto flex flex-col text-center justify-center">
            <h4
              className={`mb-12 font-deca bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-300 via-fuchsia-600 to-orange-600 bg-clip-text text-transparent selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-base md:text-lg lg:text-lg xl:text-lg font-bold`}
            >
              WorkAsPro; Decentralized Freelancing Platform
            </h4>
          </div>
          <div className="flex justify-center space-x-3 md:space-x-6 lg:space-x-8 items-center  my-4">
            <div className="group border-purple-400 hover:bg-purple-400 hover:text-white hover:drop-shadow-2xl text-purple-500 rounded-md md:rounded-xl px-2 py-1 md:px-4 md:py-2 shadow-md drop-shadow-lg dark:bg-purple-400 dark:shadow-none dark:hover:shadow-white select-none dark:text-white shadow-purple-300 ">
              <Link
                href="https://dbwapstagt.workaspro.com/"
                target="_blank"
                className="flex  items-center font-normal lg:font-bold space-x-2 text-sm md:text-base"
              >
                <FiFileText className="dark:stroke-white stroke-purple-400 stroke-2 group-hover:stroke-white " />
                <p>Live</p>
              </Link>
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
              Building Trust and Security on the Blockchain: The Technologies
              Behind WorkAspRO WorkAspRO, a blockchain-based freelancing
              platform, stands out for its focus on trust and security. This
              wouldn't be possible without a solid foundation of powerful
              technologies. Let's delve into the key tools that brought this
              platform to life: Solidity: The Backbone of Trust At the heart of
              WorkAspRO lies Solidity, the language used to create smart
              contracts. These self-executing contracts govern transactions on
              the blockchain, ensuring transparency and security. For WorkAspRO,
              Solidity enables features like secure escrow payments, dispute
              resolution mechanisms, and automated freelancer payouts, creating
              a trusted environment for both freelancers and clients.
            </h4>
            <h4
              className={`mt-10 only:mb-12 font-deca bg-gradient-to-br bg-clip-text selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-sm md:text-lg lg:text-lg xl:text-lg `}
            >
              Express & Nest.js: Building a Scalable Backend Behind the scenes,
              Express.js and Nest.js form the platform's robust backend
              architecture. Express provides a flexible framework for building
              APIs, while Nest.js adds structure and scalability. This
              combination ensures the platform can handle large volumes of users
              and transactions efficiently, supporting a thriving freelance
              community. MongoDB: Storing Data with Confidence MongoDB takes
              center stage for data storage. This NoSQL database allows for
              flexible and efficient storage of user data, transaction details,
              and escrow funds. Its scalability ensures that as the platform
              grows, it can accommodate more users and data without performance
              issues.
            </h4>
            <h4
              className={`mt-10 only:mb-12 font-deca bg-gradient-to-br bg-clip-text selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-sm md:text-lg lg:text-lg xl:text-lg `}
            >
              React & Next.js: Delivering a Seamless User Experience The user
              interface, built with React and Next.js, plays a crucial role in
              attracting and retaining users. These frontend frameworks provide
              WorkAspRO with a dynamic and intuitive interface, making it easy
              for freelancers to find work and clients to find the talent they
              need. Collaboration is Key: Cross-Functional Teamwork It's
              important to remember that technology plays just one part in the
              success of a platform like WorkAspRO. Close collaboration between
              the development team and cross-functional teams like design and
              marketing was essential. By combining their expertise, they
              ensured a seamless integration of all technologies, creating a
              user-friendly and secure experience for everyone involved.
            </h4>
          </div>
        </div>
      </main>
    </div>
  );
}
