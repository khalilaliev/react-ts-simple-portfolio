import { experiences } from "../../data/experiences";
import Title from "../Title/Title";

const Bio = () => {
  return (
    <div className="mt-9">
      <Title text="Bio" />
      {experiences.map((experience) => {
        return (
          <div key={experience.id}>
            <p className="mt-3 dark:text-dark-text">
              <strong className="mr-2">{experience.year}</strong>{" "}
              {experience.experience}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Bio;
