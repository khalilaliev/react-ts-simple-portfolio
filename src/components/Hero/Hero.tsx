import logo from "../../assets/logo.jpg";

const Hero = () => {
  return (
    <>
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
          <p className="text-2xl font-thin tracking-widest dark:text-dark-text">
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
    </>
  );
};

export default Hero;
