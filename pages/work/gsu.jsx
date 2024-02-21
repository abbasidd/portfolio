/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import { FiFileText } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
export default function gsu() {
  return (
    <div className="px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
      <Head>
        <title>GSU ✦ work</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className="  max-w-screen ">
        <div className=" mx-auto pt-16 -pb-10 max-w-7xl">
          <div className=" mx-auto flex flex-col text-center justify-center">
            <h1
              className={`mt-6 mb-12 font-deca bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900 bg-clip-text text-transparent selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold`}
            >
              GSU
            </h1>
          </div>
          <div className=" mx-auto flex flex-col text-center justify-center">
            <h4
              className={`mb-12 font-deca bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-300 via-fuchsia-600 to-orange-600 bg-clip-text text-transparent selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-base md:text-lg lg:text-lg xl:text-lg font-bold`}
            >
              Stable Decentralized Currency; GSU
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
              <Link
                href="https://github.com/abbasidd/oracle-suite"
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
              GSU: Harnessing Technology for a Stable Decentralized Currency GSU
              stands out as a decentralized platform with the ambitious goal of
              establishing a dependable and stable digital currency. Inspired by
              the MakerDAO protocol, it employs various technologies to achieve
              this ambition.
            </h4>
            <h4
              className={`mt-10 only:mb-12 font-deca bg-gradient-to-br bg-clip-text selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-sm md:text-lg lg:text-lg xl:text-lg `}
            >
              One crucial element is the integration of oracles, external data
              sources like shell scripting and Javascript. These oracles act as
              the platform's eyes and ears, feeding it with vital information
              that helps maintain the currency's stability. Additionally, GSU
              incorporates an Emergency Shutdown Mechanism (ESM), a safety net
              designed to ensure platform security and integrity in unforeseen
              circumstances.
            </h4>
            <h4
              className={`mt-10 only:mb-12 font-deca bg-gradient-to-br bg-clip-text selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-sm md:text-lg lg:text-lg xl:text-lg `}
            >
              Beyond stability, GSU also focuses on user engagement and reward.
              This is where the vesting contract comes in. Built using Solidity
              smart contracts on the Ethereum blockchain, it allows users who
              hold a certain amount of GSU tokens to register and receive
              rewards. The Nest.js backend, written in TypeScript and backed by
              a MongoDB database, plays a crucial role in this process. It
              handles user registration, generates unique signatures for
              contract verification, and facilitates token transfers. The entire
              system is rigorously tested with Hardhat, ensuring smooth
              functionality and security. In conclusion, GSU harnesses a range
              of technologies to achieve its goals. Decentralization, data
              access through oracles, a robust security mechanism, and a
              user-centric reward system underpin its mission of creating a
              dependable and stable digital currency within the decentralized
              ecosystem.
            </h4>
          </div>
        </div>
      </main>
    </div>
  );
}
