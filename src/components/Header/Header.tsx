import { FC } from "react";
import { FaNodeJs } from "react-icons/fa";

const Header: FC = () => {
  return (
    <div className="max-w-3xl my-0 mx-auto bg-white rounded-xl shadow-xl container">
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
