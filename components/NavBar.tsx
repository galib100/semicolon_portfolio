import NavbarItem from './NavbarItem';
import Image from '@/node_modules/next/image';
import Logo from '../assets/semicolon.png'
const Navbar = () => {
  return (
    <nav className="bg-blend-darken-300 p-4 flex justify-center items-center">
      <div className="flex items-center ">
        <a href="/" className="text-xl font-bold text-white">
          <Image 
          src={Logo}
          alt='logo'
         width={100}
         height={100}
          />
        </a>
        <NavbarItem href="/" text="Home" />
        <NavbarItem href="/about" text="About" />
        <NavbarItem href="/services" text="Services" />
        <NavbarItem href="/contact" text="Contact" />
      </div>
      <div className="flex items-center space-x-4">
        {/* <button className="text-gray-800 hover:text-gray-600 transition duration-300">
          Login
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300">
          Sign Up
        </button> */}
      </div>
    </nav>
  );
};

export default Navbar;
