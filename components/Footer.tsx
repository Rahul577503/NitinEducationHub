import Social from "./Socials";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-4 md:flex-row md:justify-between md:items-center">
        <div className="text-center">
          <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
          <p>Email: nitinmaurya.in@gmail.com</p>
          <p>Phone: 638-635-1188</p>
        </div>

        <div className="text-center">
          <h2 className="text-lg font-semibold mb-2">Connect With Us</h2>
          <Social textColor="white" />
        </div>
      </div>

      <div className="text-center mt-8">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Nitin Maurya. All rights reserved.
        </p>
        <p className="text-sm">
          Developed with ❤️ by{" "}
          <Link
            href="https://github.com/Rahul577503"
            className="text-blue-500 cursor-pointer hover:text-blue-300"
          >
            Rahul
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
