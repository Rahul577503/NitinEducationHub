import React from "react";
import StudyMaterialCard from "./StudyMaterial";
import { Material } from "@/constants/studymaterial";
import { modelPaper} from "@/constants/modelPapers";

const MaterialCard: React.FC = () => {
  const renderStudyMaterials = (data: any[]) => {
    return data.map((item, index) => (
      <StudyMaterialCard
        key={index}
        title={item.title}
        links={item.links}
      />
    ));
  };

  return (
    <div className="flex justify-center lg:flex-row flex-col gap-4 p-4">
      <div className="w-full md:w-1/2">
        <div className="max-w-full bg-gray-900 hover:ring-4 ring-yellow-400 rounded-2xl shadow-lg p-4">
          <h2 className="text-white text-xl font-bold mb-4 text-center">Study Material</h2>
          <div className="grid lg:grid-cols-4 grid-cols-3 gap-2">
            {renderStudyMaterials(Material)}
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="max-w-full bg-gray-900 hover:ring-4 ring-yellow-400 rounded-2xl shadow-lg p-4">
          <h2 className="text-white text-xl text-center font-bold mb-4">Model Paper</h2>
          <div className="grid lg:grid-cols-4 grid-cols-3 gap-2">
            {renderStudyMaterials(modelPaper)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaterialCard;
