import zurich from "../assets/zurich.jpeg";
import tailwind from "../assets/tailwindcss.webp";
import typescript from "../assets/typescript.webp";
import npmi from "../assets/npmi.png";
import viteconfig from "../assets/viteconfig.png";
import css from "../assets/css.png";
import importcss from "../assets/importcss.png";
import using from "../assets/using.png";

interface IActivity {
  label: string;
  id: number;
  img?: string;
}

interface IBlogs {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  activity?: IActivity[];
}

export const blogs: IBlogs[] = [
  {
    id: 1,
    title: "The 5 Best Things to Do in Zurich",
    imageUrl: zurich,
    description:
      "Zurich, Switzerland's largest city, is a vibrant hub that blends rich history with modern cosmopolitan life. Nestled along the shores of Lake Zurich and framed by the distant peaks of the Swiss Alps, Zurich offers a stunning natural backdrop that complements its urban charm.",
    activity: [
      {
        id: 1,
        label:
          "Explore the Old Town (Altstadt): Wander through the narrow cobblestone streets of Zurich's Old Town, filled with medieval buildings, charming shops, and cozy cafes. Don't miss landmarks like the Grossmünster, Fraumünster, and St. Peter's Church.",
      },
      {
        id: 2,
        label:
          "Visit Lake Zurich (Zürichsee): Stroll along the lake's promenade, rent a paddleboat, or enjoy a scenic cruise. Lake Zurich offers stunning views of the city and surrounding mountains, especially during sunset.",
      },
      {
        id: 3,
        label:
          "Walk Along Bahnhofstrasse: One of the world's most exclusive shopping streets, Bahnhofstrasse is a must-visit for luxury shopping, window browsing, or simply enjoying a leisurely walk.",
      },
      {
        id: 4,
        label:
          "Discover the Swiss National Museum (Landesmuseum Zürich): Dive into Switzerland's rich history, culture, and art at this impressive museum. The exhibits cover everything from prehistoric artifacts to contemporary Swiss design.",
      },
      {
        id: 5,
        label:
          "Enjoy Swiss Chocolate and Cuisine: Zurich offers numerous opportunities to indulge in Swiss chocolate at places like Confiserie Sprüngli or Läderach. For a more substantial meal, try Swiss specialties like fondue or raclette at local restaurants.",
      },
    ],
  },
  {
    id: 2,
    title: "How to use TailwindCSS?",
    imageUrl: tailwind,
    description:
      "Tailwind CSS is a utility-first CSS framework that allows developers to build custom designs quickly and efficiently by using predefined classes directly in their HTML. Instead of writing custom CSS for every component, Tailwind offers a vast set of utility classes for layout, spacing, typography, colors, and more, making it easy to style elements directly in the markup.",
    activity: [
      {
        id: 1,
        label:
          "You can install Tailwind CSS using npm or Yarn. Here’s how to do it:",
        img: npmi,
      },
      {
        id: 2,
        label:
          "Update tailwind.config.js You can customize your Tailwind setup by modifying the tailwind.config.js file. Here’s a basic configuration:",
        img: viteconfig,
      },
      {
        id: 3,
        label:
          "Create a CSS file (e.g., src/index.css or src/styles/tailwind.css) and add the Tailwind CSS directives:",
        img: css,
      },
      {
        id: 4,
        label:
          "Import the CSS file into your project. For example, in a React project, you would add the import statement to your index.tsx or App.tsx:",
        img: importcss,
      },
      {
        id: 5,
        label:
          "You can now use Tailwind's utility classes in your HTML or JSX:",
        img: using,
      },
    ],
  },
  {
    id: 3,
    title: "Why you should learn TypeScript in 2024?",
    imageUrl: typescript,
    description:
      "TypeScript, a statically typed superset of JavaScript, helps developers catch errors early in the development process by providing static type checking.",
  },
];
