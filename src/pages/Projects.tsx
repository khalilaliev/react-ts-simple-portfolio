import { FC } from "react";
import { projects } from "../data/projects";
import { Link } from "react-router-dom";

const Projects: FC = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <div className="flex md:flex-row flex-col justify-center gap-8 w-fit">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden w-full sm:w-72 hover:translate duration-300 transition-all"
          >
            <div className="flex-shrink-0">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-52 object-cover"
              />
            </div>
            <div className="flex flex-col justify-between flex-grow p-4">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <Link
                to={`/projects/${project.id}`}
                className="mt-auto text-blue-500 hover:underline"
              >
                See the project
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
