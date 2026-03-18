import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-6 px-8 border-b">
      <h1 className="text-2xl font-bold">Foodieland</h1>

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