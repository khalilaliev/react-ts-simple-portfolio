import { FC, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaNodeJs } from "react-icons/fa";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const Header: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { pathname } = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`max-w-3xl my-0 mx-auto dark:bg-header-bg dark:text-dark-text bg-white z-50 rounded-xl shadow-xl container fixed top-0 left-0 right-0 transition-colors duration-300 ${
          isScrolled ? "bg-opacity-80 backdrop-blur-sm" : "bg-opacity-100"
        }`}
      >
        <div className="flex items-center justify-between py-4">
          <Link
            to="/"
            className="font-semibold flex items-center justify-between "
          >
            <FaNodeJs className="text-2xl" /> Khalil Aliiev
          </Link>
          <nav className="hidden md:flex gap-1">
            <Link
              to="/"
              className={`font-light border-b-2 border-transparent dark:hover:text-blue-700 hover:bg-blue-200 dark:hover:bg-hover-bg rounded-lg p-2 duration-100 transition-all ease-in-out ${
                pathname === "/" ? "text-blue-500 font-medium " : ""
              }`}
            >
              About
            </Link>
            <Link
              to="/projects"
              className={`font-light border-b-2 border-transparent dark:hover:text-blue-700 hover:bg-blue-200 dark:hover:bg-hover-bg rounded-lg p-2 duration-100 transition-all ease-in-out ${
                pathname === "/projects" || /^\/projects\/\d+$/.test(pathname)
                  ? "text-blue-500 font-medium "
                  : ""
              }`}
            >
              Projects
            </Link>
            <Link
              to="/blog"
              className={`font-light border-b-2 border-transparent dark:hover:text-blue-700 hover:bg-blue-200 dark:hover:bg-hover-bg rounded-lg p-2 duration-100 transition-all ease-in-out ${
                pathname === "/blog" || /^\/blog\/\d+$/.test(pathname)
                  ? "text-blue-500 font-medium"
                  : ""
              }`}
            >
              Blog
            </Link>
          </nav>
          <button onClick={toggleTheme}>
            {theme === "light" ? (
              <>
                <MdOutlineDarkMode className="text-2xl" />
              </>
            ) : (
              <>
                <MdOutlineLightMode className="text-2xl" />
              </>
            )}
          </button>
          <button
            className="text-2xl p-2 md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <AiOutlineClose /> : <RxHamburgerMenu />}
          </button>
        </div>
        {isOpen && (
          <nav className="md:hidden absolute top-17 right-0 w-40 bg-white dark:bg-dark-bg shadow-md rounded-md p-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link
                  to="/"
                  onClick={toggleMenu}
                  className={`font-light border-b-2 border-transparent hover:bg-blue-200 rounded-lg p-2 duration-300 transition-all ${
                    pathname === "/" ? "text-blue-500" : ""
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  onClick={toggleMenu}
                  className={`font-light border-b-2 border-transparent hover:bg-blue-200 rounded-lg p-2 duration-300 transition-all ${
                    pathname === "/projects" ||
                    /^\/projects\/\d+$/.test(pathname)
                      ? "text-blue-500"
                      : ""
                  }`}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  onClick={toggleMenu}
                  className={`font-light border-b-2 border-transparent hover:bg-blue-200 rounded-lg p-2 duration-300 transition-all ${
                    pathname === "/blog" ? "text-blue-500" : ""
                  }`}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </>
  );
};

export default Header;
