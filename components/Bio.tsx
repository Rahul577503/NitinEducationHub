import {
  FaBirthdayCake,
  FaAddressCard,
  FaMobileAlt,
  FaBriefcase,
  FaUserFriends,
} from "react-icons/fa";
import { IoWoman } from "react-icons/io5";
import { IoMdMan } from "react-icons/io";
import { GiBodyHeight } from "react-icons/gi";
import { FaComputer } from "react-icons/fa6";
import biodata from "@/constants/BioData";
import Image from "next/legacy/image";
import ProfileImage from "@/public/ProfileImage.svg";

const Resume: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto my-8 p-6 border rounded-lg shadow-lg">
      <h1 className="text-center text-4xl font-bold text-green-500 border-b border-dashed border-green-500 mb-6">
        BIODATA
      </h1>

      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/4 lg:mr-6 mb-6 lg:mb-0">
          <Image
            src={ProfileImage}
            alt="Profile Picture"
            width={200}
            height={200}
            className="rounded-md"
          />
        </div>
        <div className="w-full lg:w-3/4">
          <h1 className="text-2xl font-bold mb-2">{biodata.name}</h1>
          <div className="mb-2 flex items-center">
            <FaBirthdayCake className="mr-2" />
            <span>{biodata.birth}</span>
          </div>
          <div className="mb-2 flex items-center">
            <FaAddressCard className="mr-2" />
            <span>{biodata.address}</span>
          </div>
          <div className="mb-2 flex items-center">
            <GiBodyHeight className="mr-2" />
            <span>{biodata.height}</span>
          </div>
          <div className="flex items-center">
            <FaMobileAlt className="mr-2" />
            <span>{biodata.mobile}</span>
          </div>
        </div>
      </div>
      <br />
      <div className="bg-green-500 ">
        <h1 className="text-center">Education</h1>
      </div>

      <div className="flex justify-start gap-8 items-center border-2 border-green-500  w-full  px-4 mb-4">
        <div className="flex flex-col gap-6 sm:gap-0 md:gap-0 lg:gap-0">
          <p>10th -</p>
          <p>12th -</p>
          <p>B.Tech -</p>
          <p>Job In Bengaluru -</p>
          <p>Computer Teacher -</p>
        </div>
        <div>
          <ul className="list-disc pl-6">
            {biodata.education.timeline.map((edu, index) => (
              <li
                key={index}
              >{`${edu.year} ${edu.degree}  ${edu.percentage}`}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-2 border-green-500 rounded-lg mb-6">
        <div className="p-4">
          <h2 className="text-xl text-center font-bold mb-2">Employment</h2>
          <div className="mb-2">
            <FaComputer className="mr-2 inline" />
            <span className="font-bold">{biodata.employment.currentJob}</span>
          </div>
          <div className="ml-8">{biodata.employment.jobDetails}</div>
          <div className="mt-4">
            <FaBriefcase className="mr-2 inline" />
            <span className="font-bold">{biodata.employment.previousJob}</span>
          </div>
          <div className="ml-8">{biodata.employment.jobDuration}</div>
          <div className="ml-8">{biodata.employment.school}</div>
        </div>
      </div>

      <div className="border-2 border-green-500 rounded-lg mb-6">
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">Family</h2>
          <div className="mb-2">
            <IoMdMan className="mr-2 inline" />
            <span className="font-bold">Father:</span>{" "}
            <span className="text-gray-900 ">{biodata.family.father}</span>
          </div>
          <div className="mb-2">
            <IoWoman className="mr-2 inline" />
            <span className="font-bold">Mother:</span>{" "}
            <span className="text-gray-900">{biodata.family.mother}</span>
          </div>
          <div className="mb-2">
            <FaUserFriends className="mr-2 inline" />
            <span className="font-bold">Siblings:</span>{" "}
            {biodata.family.siblings.map((sibling, index) => (
              <span key={index} className="block">
                {index === 0 ? (
                  <span className="text-gray-900">{sibling}</span>
                ) : (
                  sibling
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
