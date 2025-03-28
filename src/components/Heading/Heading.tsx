import { FC } from "react";

interface IHeading {
  text: string;
}

const Heading: FC<IHeading> = ({ text }) => {
  return (
    <h1 className="text-4xl max-md:text-3xl mt-5 mb-8 dark:text-dark-text font-bold">
      {text}
    </h1>
  );
};

export default Heading;
