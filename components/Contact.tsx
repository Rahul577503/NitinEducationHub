import React, { useState } from "react";
import { FiMail } from "react-icons/fi";
import Social from "./Socials";
const ContactUs: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMail = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
      <p className="text-gray-600 mb-8">
        Have a question or suggestion? Feel free to contact us!
      </p>
      <button
        className={`flex items-center justify-center px-4 py-2 bg-yellow-500 text-white rounded-md shadow-md hover:text-gray-900 hover:bg-white focus:outline-none focus:bg-blue-600 ${
          isLoading && "opacity-50 cursor-not-allowed"
        }`}
        onClick={handleSendMail}
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin w-5 h-5 mr-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V2.83a1 1 0 112 0V4a8 8 0 01-8 8z"
              ></path>
            </svg>
            Sending...
          </>
        ) : (
          <>
            <FiMail className="w-6 h-6 mr-2" />
            Send Email
          </>
        )}
      </button>
      <Social textColor="green" />
      
    </div>
  );
};

export default ContactUs;
