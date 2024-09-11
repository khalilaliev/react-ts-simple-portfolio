import { FC, useEffect, useState } from "react";
import { FaNodeJs } from "react-icons/fa";

const Header: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
        <a
          href="#"
          className=" font-semibold flex items-center justify-between gap-2"
        >
          {" "}
          <FaNodeJs className="text-2xl" /> Khalil Aliiev
        </a>

        <nav>
          <ul className="flex items-center justify-between gap-5">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
