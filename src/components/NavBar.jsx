import Logo from "../assets/logo.png";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

export const NavBar = () => {
  return (
    <>
      <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <img src={Logo} alt="logo" className="w-12" />
        </div>

        <div className="mb-8 flex items-center justify-center gap-4 text-2xl mt-5">
          <a
            target="_blank"
            className="cursor-pointer hover:text-[#0A66C2] hover:scale-110 transition-transform"
            href="https://www.linkedin.com/in/d%C6%B0%C6%A1ng-h%C3%A0-tu%E1%BA%A5n-8268472a1/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          >
            <FaLinkedinIn />
          </a>
          <a
            target="_blank"
            className="cursor-pointer hover:scale-110 transition-transform"
            href="https://github.com/hatuan1423"
          >
            <FaGithub />
          </a>
          <a
            href=""
            target="_blank"
            className="cursor-pointer hover:scale-110 transition-transform"
          >
            <FaInstagram />
          </a>
        </div>
      </nav>
    </>
  );
};
