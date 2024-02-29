import Social from "./Socials";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-4 md:flex-row md:justify-between md:items-center">
        <div className="text-center">
          <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
          <p>Email: example@example.com</p>
          <p>Phone: 123-456-7890</p>
        </div>

        <div className="text-center">
          <h2 className="text-lg font-semibold mb-2">Connect With Us</h2>
          <Social textColor="white"/>
        </div>
      </div>

      <div className="text-center mt-8">
        <p>
          &copy; {new Date().getFullYear()} AviaBookingOnline. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
