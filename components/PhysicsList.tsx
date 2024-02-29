import React from "react";
import { IPhysicsChapter } from "@/interface/common";
import Chapter from "./Chapters";
interface PhysicsListProps {
  chapters: IPhysicsChapter[];
}

const PhysicsList: React.FC<PhysicsListProps> = ({ chapters }) => {
  return (
    <div className="max-w-md mx-auto py-10">
      {chapters.map((chapter, index) => (
        <Chapter key={index} chapter={chapter} />
      ))}
    </div>
  );
};

export default PhysicsList;
