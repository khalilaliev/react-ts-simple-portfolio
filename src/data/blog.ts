import zurich from "../assets/zurich.jpeg";
import tailwind from "../assets/tailwindcss.webp";
import typescript from "../assets/typescript.webp";
import npmi from "../assets/npmi.png";
import viteconfig from "../assets/viteconfig.png";
import css from "../assets/css.png";
import importcss from "../assets/importcss.png";
import using from "../assets/using.png";
import primitive from "../assets/primitive.png";
import arr from "../assets/arr.png";
import tuple from "../assets/tuple.png";
import obj from "../assets/obj.png";
import optional from "../assets/optional.png";
import union from "../assets/union.png";
import alias from "../assets/alias.png";
import front2024 from "../assets/front2024.png";

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
    activity: [
      {
        id: 1,
        label:
          "Static Typing: TypeScript provides static type checking, which helps catch type-related errors at compile time rather than at runtime. This can prevent many common bugs and make the codebase more robust.",
      },
      {
        id: 2,
        label:
          "Code Clarity: Type annotations make the code more self-documenting, which improves readability and maintainability. It becomes easier to understand the data structures and expected values.",
      },
      {
        id: 3,
        label:
          "IntelliSense and Autocompletion: TypeScript integrates well with editors like VSCode, offering advanced autocompletion, type inference, and refactoring tools. This can speed up development and reduce the likelihood of errors.",
      },
      {
        id: 4,
        label:
          "Error Detection: TypeScript's compile-time checking can catch potential issues before code is executed, which helps in writing reliable code and speeds up debugging.",
      },
      {
        id: 5,
        label: "Basic Variable Typing",
      },
      {
        id: 6,
        label: "Primitive Types:",
        img: primitive,
      },
      {
        id: 7,
        label: "Arrays:",
        img: arr,
      },
      {
        id: 8,
        label:
          "Tuples are arrays with fixed sizes and known types for each position:",
        img: tuple,
      },
      {
        id: 9,
        label: "Objects:",
        img: obj,
      },
      {
        id: 10,
        label: "Optional Properties:",
        img: optional,
      },
      {
        id: 11,
        label:
          "Union types allow a variable to hold more than one type of value:",
        img: union,
      },
      {
        id: 12,
        label: "Type aliases allow you to create a new name for a type:",
        img: alias,
      },
      {
        id: 13,
        label:
          "Summary: By explicitly typing variables, TypeScript provides type safety, which can prevent errors and improve code quality.",
      },
    ],
  },
  {
    id: 4,
    title:
      "Essential Skills for Frontend Developers in 2024: Trends and Technologies to Master",
    description:
      "Discover the key skills and trends every frontend developer should focus on in 2024. From mastering modern frameworks and web performance techniques to integrating AI and Web3 technologies, stay ahead with the latest tools and practices to build cutting-edge web applications.",
    imageUrl: front2024,
    activity: [
      {
        id: 1,
        label:
          "Frameworks and Libraries: Keep mastering popular frameworks like React, Angular, and Vue. Also, stay updated with the latest in server-side rendering (SSR) tools such as Next.js or Nuxt.js, which continue to gain traction.",
      },
      {
        id: 2,
        label:
          "Web Performance: Learning about performance optimization is crucial. Tools like Vite for faster builds, and Web Vitals for monitoring, are essential. Knowledge of edge computing and CDNs to reduce latency will also be valuable.",
      },
      {
        id: 3,
        label:
          "Design Systems and Component Libraries: Understand how to create and use design systems, and leverage component libraries like Tailwind CSS or Material UI for consistent and efficient UI development.",
      },
      {
        id: 4,
        label:
          "AI and Machine Learning Integration: Learn how to integrate AI/ML models into web applications using tools like TensorFlow.js or APIs for natural language processing and image recognition.",
      },
      {
        id: 5,
        label:
          "3D and Augmented Reality (AR): Web graphics libraries like Three.js, and tools for AR experiences, are becoming more popular, making it useful to understand how to incorporate these elements.",
      },
    ],
  },
];
