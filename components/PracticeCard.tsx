// components/PracticeCard.tsx
import React from "react";
import Link from "next/link";
import { IPractice } from '@/interface/common';

const PracticeCard: React.FC<IPractice> = ({ title, description, id }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link href={`/practices/${id}`} passHref> 
        <span className="text-blue-500 hover:underline cursor-pointer">
          Start Practice
        </span>
      </Link>
    </div>
  );
};

export default PracticeCard;
