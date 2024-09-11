import "./style.css";
import { FC, useEffect, useState } from "react";
import { FaNodeJs } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Header: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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
  return (
    <div
      className={`max-w-3xl my-0 mx-auto bg-white rounded-xl shadow-xl container fixed top-0 left-0 right-0 transition-colors duration-300 ${
        isScrolled ? "bg-opacity-80 backdrop-blur-sm" : "bg-opacity-100"
      }`}
    >
      <div className=" flex items-center justify-between py-6 ">
        <Link
          to="/"
          className=" font-semibold flex items-center justify-between gap-2"
        >
          {" "}
          <FaNodeJs className="text-2xl" /> Khalil Aliiev
        </Link>

        <nav>
          <ul className="flex items-center justify-between gap-5">
            <li>
              <Link
                to="/"
                className={`border-b-2 border-transparent hover:border-black transition duration-300 ease-in-out ${
                  pathname === "/" ? "active-link" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`border-b-2 border-transparent hover:border-black transition duration-300 ease-in-out ${
                  pathname === "/about" ? "active-link" : ""
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className={`border-b-2 border-transparent hover:border-black transition duration-300 ease-in-out ${
                  pathname === "/projects" ? "active-link" : ""
                }`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className={`border-b-2 border-transparent hover:border-black transition duration-300 ease-in-out ${
                  pathname === "/blog" ? "active-link" : ""
                }`}
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
