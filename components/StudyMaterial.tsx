import React from "react";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";

interface StudyMaterial {
  title: string;
  links: string;
}

const StudyMaterialCard: React.FC<StudyMaterial> = ({ title, links }) => {
  const handleClick = () => {
    window.open(links, "_blank");
  };

  return (
    <div className="overflow-hidden flex gap-2">
      <div className="bg-white shadow-md rounded-md">
        <div className="p-2">
          <button
            onClick={handleClick}
            className="text-sm font-light text-gray-800 flex  gap-1 cursor-pointer"
          >
            {title}
            <FiExternalLink />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudyMaterialCard;
