import { Link } from "react-router-dom";
import Title from "../Title/Title";
import { GrProjects } from "react-icons/gr";
import { WORK } from "../../data/strings";

const Work = () => {
  return (
    <div className="mt-9">
      <Title text="Work" />
      <p className="mt-3 dark:text-dark-text">{WORK}</p>
      <div className="mt-3 flex justify-center ">
        <Link
          to={"/projects"}
          className="text-blue-400 flex items-center gap-2 dark:hover:text-blue-700 dark:hover:bg-hover-bg hover:bg-blue-100 px-2 py-1 hover:text-blue-500 rounded-2xl transition-all duration-300"
        >
          Check out my projects <GrProjects />
        </Link>
      </div>
    </div>
  );
};

export default Work;
