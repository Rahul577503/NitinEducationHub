import React from "react";
import { TfiCup } from "react-icons/tfi";
import Image from "next/image";

const CollageImage =
  "https://img.freepik.com/free-photo/vibrant-school-backpack-sitting-classroom_157027-4117.jpg?size=626&ext=jpg&ga=GA1.1.706000927.1707051425&semt=sph";

const Topper = () => {
  return (
    <div className="flex justify-center items-center py-4 min-w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 text-gray-800 flex flex-col items-center bg-green-50 justify-center">
          <div className="bg-green-500 rounded-full p-4 w-20 h-20 flex items-center justify-center mb-4">
            <TfiCup className="text-white text-4xl mx-auto" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Our Topper...</h2>
          <p className="text-lg">
            Discover the shining stars of our educational community, where
            dedication meets excellence. Meet our top achievers, their inspiring
            stories, and their journey towards success. Get inspired and
            motivated to reach for the stars with NitinEduHub top performers
          </p>
        </div>

        <div className="px-4">
          <div className="bg-green-50 rounded-lg shadow-md border border-green-100 p-2">
            <div className="mb-4 mx-auto">
              <Image
                src={CollageImage}
                alt="collage photos"
                height={300}
                width={900}
              />
            </div>
            <div className="mx-auto overflow-x-auto ">
              <table className="text-sm lg:text-xl">
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">Student Name</td>
                    <td className="border px-4 py-2">Marks %</td>
                    <td className="border px-4 py-2">Student Name</td>
                    <td className="border px-4 py-2">Marks</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Rahul Maurya</td>
                    <td className="border px-4 py-2">95</td>
                    <td className="border px-4 py-2">Ujjawal Maurya</td>
                    <td className="border px-4 py-2">87</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Sahitya Maurya</td>
                    <td className="border px-4 py-2">87</td>
                    <td className="border px-4 py-2">Nitesh Maurya</td>
                    <td className="border px-4 py-2">87</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Aman Maurya</td>
                    <td className="border px-4 py-2">87</td>
                    <td className="border px-4 py-2"></td>
                    <td className="border px-4 py-2"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topper;
