/* eslint-disable react/no-unescaped-entities */
'use client'
import Head from "next/head";
import Image from "next/legacy/image";
import ContactUs from "@/components/Contact";
import MyImage from "@/public/ProfileImage.svg";

const ProfileImage =
  "https://img.freepik.com/free-photo/portrait-handsome-man_23-2150770959.jpg?size=626&ext=jpg&ga=GA1.1.706000927.1707051425&semt=sph";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen py-[110px] flex flex-col justify-center items-center">
      <div className="max-w-[800px] flex flex-col justify-center items-center ">
        <Head>
          <title>About Us</title>
        </Head>
        <Image
          src={MyImage}
          height={350}
          width={250}
          alt="Profile"
          className="rounded-full h-40 w-40  mb-4"
        />
        <h1 className="text-3xl font-bold mb-2">Nitin Maurya</h1>
        <p className="text-gray-600 text-2xl mb-3">Computer Teacher & Software Engineer</p>
        <div className="">
          <p className="text-center">
            Hey everyone, I'm Nitin Maurya, a computer teacher! 💻 Teaching
            computers?That's my forte! Whether it's explaining concepts ,
            guiding through coding exercises, or answering tech questions, I've
            got you covered. Need help understanding computers or software? I'm
            here to make it easy for you. Let's dive into the world of
            technology together! 🚀
          </p>
        </div>
      </div>
      <div className="flex flex-col ">
        <div className="p-2">
          <ContactUs />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
