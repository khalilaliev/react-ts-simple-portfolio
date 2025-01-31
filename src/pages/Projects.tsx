import { FC } from "react";
import { projects } from "../data/projects";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useFadeIn } from "../hooks/useFadeIn";
import Heading from "../components/Heading/Heading";

const Projects: FC = () => {
  const { animationProps } = useFadeIn({ delay: 0 });

  return (
    <motion.div {...animationProps}>
      <div className="container mx-auto">
        <Heading text="My Projects" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col dark:bg-dark-bg bg-white hover:shadow-lg dark:shadow-header-bg rounded-lg overflow-hidden w-full hover:-translate-y-1 duration-300 transition-all"
            >
              <Link to={`/projects/${project.id}`}>
                <div className="flex-shrink-0">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-52 object-cover"
                  />
                </div>
              </Link>
              <div className="flex flex-col justify-between flex-grow p-4">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-600  mb-4 dark:text-dark-text">
                  {project.description}
                </p>
                <Link
                  to={`/projects/${project.id}`}
                  className="mt-auto text-blue-500 dark:hover:text-dark-text hover:text-black transition-all duration-300"
                >
                  See the project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
