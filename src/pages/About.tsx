import { FC } from "react";
import Title from "../components/Title/Title";
import { skills } from "../data/skills";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GrProjects } from "react-icons/gr";
import logo from "../assets/logo.jpg";
import { certificates } from "../data/certificates";

const About: FC = () => {
  return (
    <div className="max-w-2xl my-0 mx-auto">
      <div className="px-8 py-6 dark:bg-secondary-bg dark:text-dark-text bg-bg-custom rounded-xl flex justify-center">
        <p>
          Hello I'm Khalil Aliiev. I'm a Front-End Developer based on Zürich!
        </p>
      </div>
      <div className="flex justify-between items-center mt-5">
        <div>
          <h1 className="text-5xl font-semibold dark:text-dark-text">
            Khalil Aliiev
          </h1>
          <p className="text-xl font-thin tracking-widest dark:text-dark-text">
            Front-End Developer
          </p>
        </div>
        <div className="flex justify-center items-center p-4">
          <img
            src={logo}
            alt="my photo"
            className="w-32 h-32 rounded-full border-2 shadow-xl dark:border-secondary-bg  object-cover"
          />
        </div>
      </div>
      <div className="mt-9">
        <Title text="Work" />
        <p className="mt-3 dark:text-dark-text">
          Dedicated Front-End Developer with a strong foundation in HTML, CSS,
          and good knowledge of JavaScript, React, and TypeScript. I have the
          ability to create responsive and visually appealing web interfaces.
        </p>
        <div className="mt-3 flex justify-center ">
          <Link
            to={"/projects"}
            className="text-blue-500 flex items-center gap-2 dark:hover:text-dark-text hover:text-black transition-all duration-300"
          >
            Check out my projects <GrProjects />
          </Link>
        </div>
      </div>
      <div className="mt-9">
        <Title text="Bio" />
        <p className="mt-3 dark:text-dark-text">
          <strong className="mr-2 ">2019 - 2023</strong> Bachelor of
          Internarional Economics.
        </p>
        <p className="mt-2 dark:text-dark-text">
          <strong className="mr-2">2023 - present</strong> Front-End Development
          at Hillel IT School.
        </p>
      </div>
      <div className="mt-9">
        <Title text="Certifications" />
        {certificates.length !== 0 && (
          <ul className="mt-3 grid grid-cols-2 md:grid-cols-3 gap-5 justify-items-center md:justify-items-start">
            {certificates.map((certificate) => (
              <li
                key={certificate.id}
                className="dark:text-dark-text w-certificate"
              >
                <h2 className="text-xl font-normal">{certificate.title}</h2>
                <h3>{certificate.school}</h3>
                <p className="text-sm">Issued: {certificate.issued}</p>
                <a
                  href={certificate.credential}
                  target="_blank"
                  className="underline text-sm dark:hover:text-blue-500 hover:text-blue-500 transition-all duration-300"
                >
                  {certificate.cerId}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-9">
        <Title text="Skills" />
        <ul className="mt-3 flex justify-between flex-wrap gap-5">
          {skills.map((skill) => (
            <li key={skill.id} className="text-lg dark:text-dark-text">
              {skill.skill}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-9">
        <Title text="Languages" />
        <ul className="mt-3">
          <li className="text-lg tracking-wider dark:text-dark-text mt-1">
            English
          </li>
          <li className="text-lg tracking-wider dark:text-dark-text mt-1">
            German
          </li>
          <li className="text-lg tracking-wider dark:text-dark-text mt-1">
            Russian
          </li>
          <li className="text-lg tracking-wider dark:text-dark-text mt-1">
            Turkish
          </li>
          <li className="text-lg tracking-wider dark:text-dark-text mt-1">
            Ukrainian
          </li>
        </ul>
      </div>
      <div className="mt-9">
        <Title text="On the Web" />
        <ul className="mt-3 space-y-2">
          <li className="max-w-32">
            <a
              href="https://github.com/khalilaliev"
              target="_blank"
              className="flex text-lg items-center dark:hover:text-blue-500 hover:text-blue-500 transition-all duration-300 gap-2 dark:text-dark-text"
            >
              <FaGithub className="text-xl " /> GitHub
            </a>
          </li>
          <li className="max-w-32">
            <a
              href="https://www.linkedin.com/in/khalil-aliiev-b31036298/"
              target="_blank"
              className="flex text-lg items-center dark:hover:text-blue-500 hover:text-blue-500 transition-all duration-300 gap-2 dark:text-dark-text"
            >
              <FaLinkedin className="text-xl " /> Linkedin
            </a>
          </li>
          <li className="max-w-32">
            <a
              href="https://www.instagram.com/khalilaliev/"
              target="_blank"
              className="flex text-lg items-center dark:hover:text-blue-500 hover:text-blue-500 transition-all  duration-300 gap-2 dark:text-dark-text"
            >
              <FaInstagram className="text-xl " /> Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
