'use client'
import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { IPhysicsSubject, IChapter } from "@/interface/common";
import MainContent from "@/components/MainContent";
import { physicsSubjects } from "@/constants/physics";

const App: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<IPhysicsSubject | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<IChapter | null>(null);

  const handleSelectSubject = (subject: IPhysicsSubject) => {
    setSelectedSubject(subject);
    setSelectedChapter(null); // Reset selected chapter when a new subject is selected
  };

  const handleSelectChapter = (chapter: IChapter) => {
    setSelectedChapter(chapter);
  };

  const handleBack = () => {
    setSelectedSubject(null);
    setSelectedChapter(null);
  };

  return (
    <div className="min-h-screen py-20 bg-green-50">
      <div className="">
        <div className="flex">
          <Sidebar subjects={physicsSubjects} onSelectChapter={handleSelectChapter} />
          <MainContent
            selectedSubject={selectedSubject}
            selectedChapter={selectedChapter}
            onBack={handleBack}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
