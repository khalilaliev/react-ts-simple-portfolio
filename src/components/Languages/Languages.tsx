import { languages } from "../../data/languages";
import Title from "../Title/Title";

const Languages = () => {
  return (
    <div className="mt-9">
      <Title text="Languages" />
      {languages.length && (
        <ul className="mt-3">
          {languages.map((language) => {
            return (
              <li
                className="text-lg tracking-wider dark:text-dark-text mt-1"
                key={language.id}
              >
                {language.title}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Languages;
