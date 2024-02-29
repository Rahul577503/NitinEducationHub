"use client";
import Head from "next/head";
import Image from "next/image";
import ContactUs from "@/components/Contact";
import MyImage from "@/public/ProfileImage.svg"

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
        <p className="text-gray-600 text-2xl mb-3">Computer Intructructor</p>
        <div className="">
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            numquam reiciendis quasi quia labore maiores aspernatur quos odio
            iusto nulla. Eos vel enim, veritatis repellat modi accusamus unde
            dolore voluptates.
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
