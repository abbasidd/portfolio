import Image from "next/image";
import aizen from "../public/aizen.jpg";
import kamui from "../public/kamui.jpg";
import pokedex from "../public/pokedex.jpg";
import portfolio from "../public/portfolio.jpg";
import cryptohunter from "../public/crypto-hunter.jpg";
import redeye from "../public/red-eye.jpg";
import extrahour from "../public/extrahour.jpeg";
import pixelbodo from "../public/pixelbodo.jpeg";
// import ems from "../public/ems.jpeg";
import nft from "../public/nft.jpg";
import nike from "../public/nike.jpg";
import Link from "next/link";

const ProjectCard = () => {
  const data = [
    {
      id: 1,
      image: aizen,
      title: "IVoting",
      description: "Internet Voting using secure encription and Blockchain.",
      link: "/work/ivoting",
      target: "_self",
    },
    {
      id: 2,
      image: kamui,
      title: "dably",
      description:
        "concept of merging precious metals with Decentralized Finance (DeFi) systems",
      link: "/work/dably",
      target: "_self",
    },
    {
      id: 3,
      image: pixelbodo,
      title: "pixelbodo",
      description: "Gotta Catch'em All. Explore your Pokemon",
      link: "/work/pixelbodo",
      target: "_self",
    },
    {
      id: 7,
      image: portfolio,
      title: "Portfolio",
      description: "Portfolio made using NextJS and Tailwind CSS",
      link: "",
      target: "",
    },
    {
      id: 8,
      image: extrahour,
      title: "EMS",
      description:
        "Ensuring Secure Voting for Overseas Pakistanis: Inside the Heart of EMS",
      link: "/work/ems",
      target: "_self",
    },
    {
      id: 9,
      image: extrahour,
      title: "Extra Hour",
      description: "A freelancing platform on Django.",
      link: "/work/extrahour",
      target: "_self",
    },
  ];

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {data.map((project) => {
        return (
          <div
            className="rounded-lg mb-12 flex flex-col items-center"
            key={project.id}
          >
            <Link
              href={project.link}
              target={project.target}
              onClick={() => {
                project.title === "Portfolio"
                  ? alert("You are already on this site! 🤩")
                  : "";
              }}
            >
              <Image
                loading="lazy"
                src={project.image}
                alt={project.title}
                width="200"
                className="rounded-md drop-shadow-2xl hover:scale-110"
              />
            </Link>
            <div className="flex flex-col items-center">
              <h1 className="font-semibold text-[1.5rem] mt-3 text-gray-700 dark:text-white">
                {project.title}
              </h1>
              <p className="max-w-[90%] text-gray-400 font-light text-center">
                {project.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCard;
