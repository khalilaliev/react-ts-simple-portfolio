import { FC } from "react";
import { blogs } from "../data/blog";
import { Link } from "react-router-dom";
import { useFadeIn } from "../hooks/useFadeIn";
import { motion } from "framer-motion";
import Heading from "../components/Heading/Heading";

const Blog: FC = () => {
  const { animationProps } = useFadeIn({ delay: 0 });

  return (
    <motion.div {...animationProps}>
      <Heading text="My Blog" />
      {blogs.length !== 0 && (
        <ul>
          {blogs.map((blog, index) => (
            <li
              key={blog.id}
              className="bg-white mb-5 rounded-xl relative dark:bg-dark-bg dark:shadow-header-bg hover:shadow-lg  dark:text-dark-text p-3  hover:-translate-y-1 duration-300 transition-all"
            >
              <Link key={blog.id} to={`/blog/${blog.id}`}>
                <h2 className="text-2xl font-light tracking-wider dark:text-dark-text">
                  {blog.title}
                </h2>
                <p className="mt-3 leading-7 text-gray-700 dark:text-blog-text">
                  {blog.description}
                </p>
              </Link>
              {index === 0 && (
                <span className="dark:bg-blue-700 bg-blue-500 text-xs text-white rounded-xl py-1 px-2 absolute right-0 top-0">
                  New
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};

export default Blog;
