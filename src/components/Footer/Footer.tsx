import { FC } from "react";

const Footer: FC = () => {
  const currDate = new Date().getFullYear();
  return (
    <div className="container">
      <div className="py-8 flex justify-center">
        <p>&copy; {currDate} Khalil Aliiev. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
