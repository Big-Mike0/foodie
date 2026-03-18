import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-6 px-8 border-b">
      <img
        src="/image/Foodieland..png"
        alt="Foodieland"
        className="h-6 w-auto object-contain"
      />

      <div className="hidden md:flex gap-6 text-sm font-medium">
        <a href="#">Home</a>
        <a href="#">Recipes</a>
        <a href="#" className="font-bold">Blog</a>
        <a href="#">Contact</a>
        <a href="#">About us</a>
      </div>

      <div className="flex gap-4 text-lg">
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
      </div>
    </div>
  );
};

export default Navbar;