import React from "react";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

const GoBack = () => {
  return (
    <Link href="/practice" className="flex items-center cursor-pointer no-underline ">
      <button className="relative inline-flex h-12 overflow-hidden rounded-md p-[1px]   ">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          <FiArrowLeft className="mr-2 hover:-translate-x-[-2px]" />
          Go Back
        </span>
      </button>
    </Link>
  );
};

export default GoBack;
