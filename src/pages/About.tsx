import { FC } from "react";

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
          <p className="text-xl">Front-End Developer</p>
        </div>
        <div className="flex justify-center items-center p-4">
          <img
            src="/src/assets/logo.jpg"
            alt="my photo"
            className="w-32 h-32 rounded-full border-2 shadow-xl  object-cover"
          />
        </div>
      </div>
      <div className="mt-5">
        <h2 className="font-medium text-2xl">Work</h2>
        <p>
          Dedicated Front-End Developer with a strong foundation in HTML, CSS,
          and good knowledge of JavaScript, React, and TypeScript. I have the
          ability to create responsive and visually appealing web interfaces.
        </p>
      </div>
    </div>
  );
};

export default About;
