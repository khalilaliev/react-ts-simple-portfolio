interface IProjects {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  gitHub?: string;
}

export const projects: IProjects[] = [
  {
    id: 1,
    title: "Fullstack ProShop",
    description:
      "Using the MERN stack, Redux and other technologies building  real life project",
    imageUrl: "../../src/assets/proshop.png",
    link: "https://proshop-gu6d.onrender.com",
    gitHub: "https://github.com/khalilaliev/react-proshop",
  },
  {
    id: 2,
    title: "PizzaDay",
    description:
      "Using ReactJS, Redux and other technologies simple pizza website",
    imageUrl: "../../src/assets/pizzaday.png",
    link: "https://react-pizzaday.vercel.app",
    gitHub: "https://github.com/khalilaliev/react-pizzaday",
  },
];
