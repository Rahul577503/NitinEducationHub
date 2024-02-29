/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import Image from "next/legacy/image";
import Image1 from "../public/Happy student-amico.svg";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen  overflow-hidden half-moon bg-gray-900">
      <div className="flex flex-col lg:flex-row justify-evenly px-4 py-12 relative z-10">
        <motion.div 
          className="lg:w-1/2 lg:mr-4 relative z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h1 className="text-3xl lg:text-5xl font-bold mb-4  text-gray-200 relative">
            <span
              style={{
                background: "-webkit-linear-gradient(left, #4F46E5, #8E54E9)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                transition: "all 0.5s ease",
                fontStyle: "text-1",
              }}
            >
              Unlock Your Potential:
            </span>{" "}
            Empowering Education for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 relative">
              {" "}
              Lifelong Learning
            </span>
          </h1>

          <p className="text-base lg:text-lg text-gray-200 py-4 leading-relaxed text-2">
            Welcome to [Your Website Name]! We're dedicated to providing quality
            educational resources to help you succeed in your learning journey.
            From interactive courses to informative articles, we offer a diverse
            range of content to suit your needs. Whether you're a student,
            professional, or lifelong learner, we're here to support your growth
            and development. Join us and take your learning to the next level!
          </p>
          <button className="gradient-border bg-transparent hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4 transition duration-300">
            <Link href="mailto:nitinmaurya1010@gmail.com">Contact Me</Link>
          </button>
        </motion.div>
        <motion.div 
          className=" flex justify-center items-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="group relative animate-pulse">
            <div className="overflow-hidden relative transition-transform duration-500 transform hover:scale-110">
              <Image src={Image1} alt="my-image" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
