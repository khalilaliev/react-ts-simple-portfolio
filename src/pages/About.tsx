import { FC } from "react";
import { motion } from "framer-motion";
import { useFadeIn } from "../hooks/useFadeIn";
import Bio from "../components/Bio/Bio.tsx";
import Work from "../components/Work/Work.tsx";
import Certificates from "../components/Certificates/Certificates.tsx";
import Skills from "../components/Skills/Skills.tsx";
import OnTheWeb from "../components/OnTheWeb/OnTheWeb.tsx";
import Languages from "../components/Languages/Languages.tsx";
import Hero from "../components/Hero/Hero.tsx";
import DynamicTitle from "../components/DynanicTitle/DynanicTitle.tsx";

const About: FC = () => {
  const { animationProps } = useFadeIn({ delay: 0 });

  return (
    <div className="my-0 mx-auto">
      <DynamicTitle title="Portfolio | About" />
      <motion.div {...animationProps}>
        <Hero />
        <Work />
        <Bio />
        <Certificates />
        <Skills />
        <Languages />
        <OnTheWeb />
      </motion.div>
    </div>
  );
};

export default About;
