import { FC } from "react";
import Title from "../components/Title/Title";
import { skills } from "../data/skills";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GrProjects } from "react-icons/gr";
import logo from "../assets/logo.jpg";

const About: FC = () => {
  return (
    <div className="max-w-2xl my-0 mx-auto">
      <div className="px-8 py-6 bg-bg-custom rounded-xl flex justify-center">
        <p>
          Hello I'm Khalil Aliiev. I'm a Front-End Developer based on Zürich!
        </p>
      </div>
      <div className="flex justify-between items-center mt-5">
        <div>
          <h1 className="text-5xl font-semibold">Khalil Aliiev</h1>
          <p className="text-xl font-thin tracking-widest">
            Front-End Developer
          </p>
        </div>
        <div className="flex justify-center items-center p-4">
          <img
            src={logo}
            alt="my photo"
            className="w-32 h-32 rounded-full border-2 shadow-xl  object-cover"
          />
        </div>
      </div>
      <div className="mt-9">
        <Title text="Work" />
        <p className="mt-3">
          Dedicated Front-End Developer with a strong foundation in HTML, CSS,
          and good knowledge of JavaScript, React, and TypeScript. I have the
          ability to create responsive and visually appealing web interfaces.
        </p>
        <div className="mt-3 flex justify-center ">
          <Link
            to={"/projects"}
            className="text-blue-500 flex items-center gap-2 hover:text-black transition-all duration-300"
          >
            Check out my projects <GrProjects />
          </Link>
        </div>
      </div>
      <div className="mt-9">
        <Title text="Bio" />
        <p className="mt-3">
          <strong className="mr-2">2019 - 2023</strong> Bachelor of
          Internarional Economics.
        </p>
        <p className="mt-2">
          <strong className="mr-2">2023 - present</strong> Front-End Development
          at Hillel IT School.
        </p>
      </div>
      <div className="mt-9">
        <Title text="Skills" />
        <ul className="mt-3 flex justify-between flex-wrap gap-5">
          {skills.map((skill) => (
            <li key={skill.id} className="text-lg">
              {skill.skill}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-9">
        <Title text="Languages" />
        <ul className="mt-3">
          <li className="text-lg tracking-wider mt-1">English</li>
          <li className="text-lg tracking-wider mt-1">German</li>
          <li className="text-lg tracking-wider mt-1">Russian</li>
          <li className="text-lg tracking-wider mt-1">Turkish</li>
          <li className="text-lg tracking-wider mt-1">Ukrainian</li>
        </ul>
      </div>
      <div className="mt-9">
        <Title text="On the Web" />
        <ul className="mt-3 space-y-2">
          <li className="max-w-32">
            <a
              href="#"
              className="flex text-lg items-center hover:text-blue-500 transition-all duration-300 gap-2"
            >
              <FaGithub className="text-xl" /> GitHub
            </a>
          </li>
          <li className="max-w-32">
            <a
              href="#"
              className="flex text-lg items-center hover:text-blue-500 transition-all duration-300 gap-2"
            >
              <FaLinkedin className="text-xl" /> Linkedin
            </a>
          </li>
          <li className="max-w-32">
            <a
              href="#"
              className="flex text-lg items-center hover:text-blue-500 transition-all duration-300 gap-2"
            >
              <FaInstagram className="text-xl" /> Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
