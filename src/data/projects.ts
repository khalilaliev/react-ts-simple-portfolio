import proshop from "../assets/proshop.png";
import pizzaday from "../assets/pizzaday.png";
import weather from "../assets/weather.png";
import todo from "../assets/todo.png";
import propertyPulse from "../assets/propertypulse.png";
interface IProjects {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  gitHub?: string;
  stack?: string;
  platform?: string;
}

export const projects: IProjects[] = [
  {
    id: 1,
    title: "Fullstack PropertyPulse",
    description:
      "Building a full-featured property rental website using Next.js",
    imageUrl: propertyPulse,
    link: "https://property-pulse-nextjs-orpin.vercel.app/",
    gitHub: "https://github.com/khalilaliev/property-pulse-nextjs",
    platform: "Web",
    stack: "NextJS, React, TypeScript, Tailwind, MongoDB",
  },
  {
    id: 2,
    title: "Fullstack ProShop",
    description:
      "Using the MERN stack, Redux and other technologies building  real life project",
    imageUrl: proshop,
    link: "https://proshop-gu6d.onrender.com",
    gitHub: "https://github.com/khalilaliev/react-proshop",
    platform: "Web",
    stack: "MongoDB, ExpressJS, ReactJS, NodeJS",
  },
  {
    id: 3,
    title: "PizzaDay",
    description:
      "Using ReactJS, Redux and other technologies simple pizza website",
    imageUrl: pizzaday,
    link: "https://react-pizzaday.vercel.app",
    gitHub: "https://github.com/khalilaliev/react-pizzaday",
    platform: "Web",
    stack: "ReactJS, TailwindCSS",
  },
  {
    id: 4,
    title: "Simple Weather",
    description: "Using just HTML/CSS and JS simple weather app",
    imageUrl: weather,
    link: "https://khalilaliev.github.io/simple-weather-app/",
    gitHub: "https://github.com/khalilaliev/simple-weather-app",
    platform: "Web",
    stack: "HTML/CSS, TailwindCSS, JavaScript, RippleUI",
  },
  {
    id: 5,
    title: "Todo",
    description:
      "Using ReactJS simple todo app with the ability to set priority",
    imageUrl: todo,
    link: "https://react-hw-3-one.vercel.app/",
    gitHub: "https://github.com/khalilaliev/react-hw-3",
    platform: "Web",
    stack: "ReactJS, TailwindCSS,",
  },
];
