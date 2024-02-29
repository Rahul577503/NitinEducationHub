import React from "react";
import { TiArrowBackOutline } from "react-icons/ti";

import { IPhysicsSubject, IChapter } from "@/interface/common";
import CardList from "./Card";

interface MainContentProps {
  selectedSubject: IPhysicsSubject | null;
  selectedChapter: IChapter | null;
  onBack: () => void;
}

const MainContent: React.FC<MainContentProps> = ({
  selectedSubject,
  selectedChapter,
  onBack,
}) => {
  function onChapterClick(chapter: IChapter): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className=" p-4  sm:w-full md:w-full flex flex-col cursor-pointer justify-center items-center" style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', letterSpacing: '0.02em', color: '#333' }}>
      {selectedChapter ? (
        <>
          <div className="flex justify-center items-center mb-4">
            <button onClick={onBack} className="mr-2">
              <TiArrowBackOutline className="text-blue-500 text-xl cursor-pointer" />
            </button>
            <h2 className="text-2xl font-bold" style={{ letterSpacing: '0.03em', marginBottom: '1rem',cursor:'pointer' }}>{selectedChapter.title}</h2>
          </div>
          <div className="flxe justify-center items-center container">
            <h3 className="text-xl font-semibold">Descriptions</h3>
            <ul>
              {selectedChapter.descriptions.map((description, index) => (
                <li key={index} style={{ marginBottom: '1rem' }}>
                  <h4 className="font-bold" style={{ fontFamily: 'Helvetica, Arial, sans-serif', letterSpacing: '0.02em', marginBottom: '0.5rem' }}>{description.title}</h4>
                  <p>{description.content}</p>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : selectedSubject ? (
        <>
          <div className="flex items-center mb-4">
            <button onClick={onBack} className="mr-2">
              <TiArrowBackOutline className="text-blue-500 text-xl cursor-pointer" />
            </button>
            <h2 className="text-2xl font-bold cursor-pointer	" style={{ fontFamily: 'Helvetica, Arial, sans-serif', letterSpacing: '0.03em', marginBottom: '1rem',cursor:'pointer' }}>{selectedSubject.title}</h2>
          </div>
          <div>
            {selectedSubject.chapters.map((chapter) => (
              <div key={chapter.id} onClick={() => onChapterClick(chapter)} style={{ marginBottom: '1rem' }}>
                <h3 className="text-xl font-semibold cursor-pointer	" style={{ fontFamily: 'Helvetica, Arial, sans-serif', letterSpacing: '0.02em', marginBottom: '0.5rem' }}>{chapter.title}</h3>
                <p>{chapter.content}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div>
          <h1 className="text-3xl font-bold text-center my-8" style={{ fontFamily: 'Helvetica, Arial, sans-serif', letterSpacing: '0.03em', marginBottom: '1rem' }}>Class 10 Physics Topics</h1>
          <CardList/>
        </div>
      )}
    </div>
  );
};

export default MainContent;
