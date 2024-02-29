import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import Link from "next/link";

interface SocialProps {
  textColor?: string;
}

const Social: React.FC<SocialProps> = ({ textColor }) => {
  return (
    <div className="flex items-center justify-center mt-4 space-x-4">
      <Link href="#" style={{ color: textColor }} className="hover:text-blue-700 transition duration-300">
        <FaTwitter size={38} />
      </Link>
      <Link href="#" style={{ color: textColor }} className="hover:text-blue-700 transition duration-300">
        <FaLinkedin size={38} />
      </Link>
      <Link href="#" style={{ color: textColor }} className="hover:text-gray-700 transition duration-300">
        <FaGithub size={38} />
      </Link>
      <Link href="#" style={{ color: textColor }} className="hover:text-red-700 transition duration-300">
        <IoLogoYoutube size={38} />
      </Link>
    </div>
  );
};

export default Social;
