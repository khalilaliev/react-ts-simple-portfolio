import { useState, useEffect } from "react";
import { MotionProps } from "framer-motion";

type UseFadeInOptions = {
  delay?: number;
  duration?: number;
  easing?: [number, number, number, number];
};

export const useFadeIn = ({
  delay = 0,
  duration = 0.7,
}: UseFadeInOptions = {}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const animationProps: MotionProps = {
    initial: { y: 20, opacity: 0 },
    animate: isVisible ? { y: 0, opacity: 1 } : undefined,
    transition: { duration },
  };

  return { isVisible, animationProps };
};
