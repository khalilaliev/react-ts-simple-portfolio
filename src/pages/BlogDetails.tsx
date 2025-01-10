import { FC } from "react";
import { blogs } from "../data/blog";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useFadeIn } from "../hooks/useFadeIn";

const BlogDetails: FC = () => {
  const { id } = useParams<{ id: string }>();
  const blog = blogs.find((p) => p.id === Number(id));
  const { animationProps } = useFadeIn({ delay: 0 });

  if (!blog) {
    return <div>Blog not Found!</div>;
  }
  return (
    <motion.div {...animationProps}>
      <img
        src={blog.imageUrl}
        alt={blog.title}
        className=" rounded-xl min-h-44 w-full object-cover shadow-lg"
      />
      {blog.activity?.length !== 0 && (
        <ul>
          {blog.activity?.map((a) => (
            <>
              <li key={a.id} className="mt-6 leading-7 text-gray-700">
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
    </motion.div>
  );
};

export default BlogDetails;
