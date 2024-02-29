import React from "react";

const Title = ({ text, className }: { text: string; className: string }) => {
  return (
    <div className={className}>
      
      <h1 className="text-[25px] lg:text-3xl  md:text-[30px] font-bold text-white hover:text-indigo-400 translate-all">
        {text}
      </h1>
      
      <div className="w-40 h-1 bg-amber-400 rounded-full"></div>
      <div className="w-full h-1 bg-indigo-400 rounded-full translate-x-2 "></div>
    </div>
  );
};

export default Title;
