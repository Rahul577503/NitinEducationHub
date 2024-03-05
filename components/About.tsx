/* eslint-disable react/no-unescaped-entities */
import React from "react";

import Image from "next/legacy/image";
import ContactUs from "@/components/Contact";
import ProfileImage from "@/public/ProfileImage.svg";

const About = () => {
  return (
    <div className="min-h-full  px-4 lg:p-0  relative">
      <div className="py-2 flex flex-col justify-center items-center">
        <div>
        <Image src={ProfileImage} alt="Profile" height={300} width={300}  className="rounded-full" />

        </div>
        <div className="max-w-3xl text-center">
          <h1 className="text-3xl font-bold mb-2 ">Nitin Maurya</h1>
          <p className="text-gray-600 text-lg mb-4 ">
            Computer Teacher & Software Engineer
          </p>
          <p className="text-lg text-gray-800 mb-8">
            Hey everyone, I'm Nitin Maurya, a computer teacher! 💻 Teaching
            computers? That's my forte! Whether it's explaining concepts,
            guiding through coding exercises, or answering tech questions, I've
            got you covered. Need help understanding computers or software? I'm
            here to make it easy for you. Let's dive into the world of
            technology together! 🚀
          </p>
        </div>
        <div className="mt-8">
          <ContactUs />
        </div>
      </div>
    </div>
  );
};

export default About;
