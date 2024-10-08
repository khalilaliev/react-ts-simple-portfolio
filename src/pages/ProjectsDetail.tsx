import { FC } from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { FaEye, FaGithub } from "react-icons/fa";

const ProjectsDetail: FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return <div>Project not Found!</div>;
  }

  return (
    <div>
      <img src={project.imageUrl} alt={project.title} className=" rounded-xl" />
      <div className="mt-5 flex justify-between items-center gap-9">
        <Link
          to={"/projects"}
          className="text-2xl text-blue-500 dark:hover:text-dark-text hover:text-black duration-300 transition-all"
        >
          Projects
        </Link>
        <h1 className="font-light text-xl dark:text-dark-text">
          {project.description}
        </h1>
      </div>
      <div className="flex items-center gap-2 mt-5">
        <span className="bg-blue-200 dark:bg-hover-bg py-1 px-2 rounded-xl text-sm text-blue-700 font-medium">
          Platform{" "}
        </span>{" "}
        <p className="font-light dark:text-dark-text">{project.platform}</p>
      </div>
      <div className="flex items-center gap-2 mt-5">
        <span className="bg-blue-200 dark:bg-hover-bg py-1 px-2 rounded-xl text-sm text-blue-700 font-medium">
          Stack{" "}
        </span>{" "}
        <p className="font-light dark:text-dark-text">{project.stack}</p>
      </div>
      <div className="mt-5 text-left">
        <a
          className="text-blue-500 dark:text-blue-700 text-lg flex justify-start max-w-36 items-center gap-2 dark:hover:bg-hover-bg hover:bg-blue-200 rounded-lg p-2 duration-300 transition-all"
          href={project.link}
          target="_blank"
        >
          Live preview <FaEye />
        </a>
      </div>
      <div className="mt-2 text-left">
        <a
          className="text-blue-500 dark:text-blue-700 text-lg flex justify-start max-w-36 items-center gap-2 dark:hover:bg-hover-bg hover:bg-blue-200 rounded-lg p-2 duration-300 transition-all"
          href={project.gitHub}
          target="_blank"
        >
          GitHub repo <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default ProjectsDetail;
