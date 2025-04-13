import { FC } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

interface IBackButton {
  source: string;
  text: string;
}

const BackButton: FC<IBackButton> = ({ source, text }) => {
  // const [isArrow, setIsArrow] = useState<boolean>(false);

  return (
    <div className="w-fit mb-5">
      <Link
        className="text-blue-400 dark:text-blue-600  dark:hover:bg-hover-bg hover:bg-blue-100 px-3 py-1 hover:text-blue-500 rounded-2xl transition-all duration-300 flex items-center gap-2"
        to={source}
      >
        <FaArrowLeftLong className="text-sm" /> {text}
      </Link>
    </div>
  );
};

export default BackButton;
