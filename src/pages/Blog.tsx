import { FC } from "react";
import { blogs } from "../data/blog";
import { Link } from "react-router-dom";
import { useFadeIn } from "../hooks/useFadeIn";
import { motion } from "framer-motion";

const Blog: FC = () => {
  const { animationProps } = useFadeIn({ delay: 0 });

  return (
    <motion.div {...animationProps}>
      <h1 className="text-4xl dark:text-dark-text font-bold mt-5">My Blog</h1>
      {blogs.length !== 0 && (
        <ul>
          {blogs.map((blog) => (
            <li
              key={blog.id}
              className="bg-white rounded-xl dark:bg-dark-bg dark:shadow-header-bg hover:shadow-lg  dark:text-dark-text p-3 mt-5 hover:-translate-y-1 duration-300 transition-all"
            >
              <Link key={blog.id} to={`/blog/${blog.id}`}>
                <h2 className="text-2xl font-light tracking-wider dark:text-dark-text">
                  {blog.title}
                </h2>
                <p className="mt-3 leading-7 text-gray-700 dark:text-blog-text">
                  {blog.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};

export default Blog;
