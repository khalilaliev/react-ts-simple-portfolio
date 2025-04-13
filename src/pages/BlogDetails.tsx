import { FC } from "react";
import { blogs } from "../data/blog";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useFadeIn } from "../hooks/useFadeIn";
import BackButton from "../components/Button/BackButton";
import DynamicTitle from "../components/DynanicTitle/DynanicTitle";

const BlogDetails: FC = () => {
  const { id } = useParams<{ id: string }>();
  const blog = blogs.find((p) => p.id === Number(id));
  const { animationProps } = useFadeIn({ delay: 0 });

  if (!blog) {
    return <div>Blog not Found!</div>;
  }
  return (
    <motion.div {...animationProps}>
      <DynamicTitle title={`Portfolio | Blog ${id}`} />
      <BackButton source="/blog" text="Back to blogs" />
      <div className="flex flex-col dark:bg-dark-bg bg-white shadow-lg dark:shadow-header-bg rounded-xl overflow-hidden w-full  duration-300 transition-all">
        <img
          src={blog.imageUrl}
          alt={blog.title}
          className=" rounded-xl min-h-44 w-full object-cover shadow-lg"
        />
        {blog.activity?.length !== 0 && (
          <ul>
            {blog.activity?.map((a) => (
              <>
                <li key={a.id} className="mt-6 p-5 leading-7 text-gray-700">
                  <p className="mt-3 dark:text-dark-text">{a.label}</p>
                  {a.img && (
                    <img
                      src={a.img}
                      alt="TailwindCSS"
                      className="rounded-lg mt-3"
                    />
                  )}
                </li>
              </>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
};

export default BlogDetails;
