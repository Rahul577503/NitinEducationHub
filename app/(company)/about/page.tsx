/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/legacy/image";
import ContactUs from "@/components/Contact";
import ProfileImage from "@/public/ProfileImage.svg";

const AboutPage = () => {
  return (
    <div className="min-h-screen py-12 flex flex-col justify-center items-center px-4 lg:p-0 bg-gray-100">
      <div className="max-w-3xl bg-white p-8 rounded-lg shadow-md text-center">
        <Head>
          <title>About Us</title>
        </Head>
        <div className="relative rounded-full overflow-hidden h-36 w-36 mx-auto mb-4">
          <Image
            src={ProfileImage}
            alt="Profile"
            height={144}
            width={144}
            className="rounded-full"
          />
        </div>
        <h1 className="text-3xl font-bold mb-2">Nitin Maurya</h1>
        <p className="text-gray-600 text-lg mb-4">Computer Teacher & Software Engineer</p>
        <p className="text-lg text-gray-800 mb-8">
          Hey everyone, I'm Nitin Maurya, a computer teacher! 💻 Teaching
          computers? That's my forte! Whether it's explaining concepts,
          guiding through coding exercises, or answering tech questions, I've
          got you covered. Need help understanding computers or software? I'm
          here to make it easy for you. Let's dive into the world of
          technology together! 🚀
        </p>
        <div className="mt-8">
          <ContactUs />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
