import React from "react";
import { IconType } from "react-icons";
import { FiBook, FiPieChart, FiCode } from "react-icons/fi";
import { FaFlask } from "react-icons/fa6";
import Image from "next/legacy/image";
import Link from "next/link";

interface CardProps {
  title: string;
  icon: IconType;
  image: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ title, icon: Icon, image, link }) => {
  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="overflow-hidden">
        <div className="hover:shadow-lg transition duration-500 ease-in-out transform hover:scale-105">
          <Image
            className="w-full h-56 "
            height={300}
            width={300}
            src={image}
            alt={title}
          />
        </div>
      </div>
      <div className="px-4 py-2">
        <div className="flex justify-center mb-2">
          <Icon className="h-6 w-6 mr-2 text-indigo-500" />
          <h2 className="text-gray-800 text-lg font-semibold">{title}</h2>
        </div>
        <Link
          href={link}
          className="text-sm text-amber-500 uppercase hover:text-indigo-600"
        >
          Explore {title}
        </Link>
      </div>
    </div>
  );
};

const PhysicsIcon = FiBook;
const ChemistryIcon = FaFlask;
const MathIcon = FiPieChart;
const ComputerIcon = FiCode;
const physicsImage =
  "https://img.freepik.com/free-photo/futuristic-machinery-drills-natural-gas-outdoors-generated-by-ai_188544-37295.jpg?size=626&ext=jpg&ga=GA1.1.706000927.1707051425&semt=sph";
const ChemistryImage =
  "https://img.freepik.com/free-photo/molecules-connect-scientific-discovery-symbolizing-progress-generated-by-ai_188544-16444.jpg?size=626&ext=jpg&ga=GA1.1.706000927.1707051425&semt=sph";
const MathImage =
  "https://img.freepik.com/free-vector/chalkboard-with-math-elements_1411-88.jpg?size=626&ext=jpg&ga=GA1.1.706000927.1707051425&semt=sph";
const ComputerImage =
  "https://img.freepik.com/free-photo/person-playing-3d-video-games-device_23-2151005751.jpg?size=626&ext=jpg&ga=GA1.1.706000927.1707051425&semt=sph";

const CardList: React.FC = () => {
  const cards = [
    {
      title: "Physics",
      icon: PhysicsIcon,
      image: physicsImage,
      link: "/practices/modern_physics",
    },
    {
      title: "Chemistry",
      icon: ChemistryIcon,
      image: ChemistryImage,
      link: "/practices/chemistry",
    },
    {
      title: "Math",
      icon: MathIcon,
      image: MathImage,
      link: "/practices/mathmatics",
    },
    {
      title: "Computer Science",
      icon: ComputerIcon,
      image: ComputerImage,
      link: "/practices/computer",
    },
  ];



  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 p-4 place-items-center">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            icon={card.icon}
            image={card.image}
            link={card.link}
          />
        ))}
      </div>
    </>
  );
};

export default CardList;
