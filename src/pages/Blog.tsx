import { FC } from "react";
import { blogs } from "../data/blog";
import { Link } from "react-router-dom";

const Blog: FC = () => {
  return (
    <>
      <h1 className="text-4xl font-bold mt-5">My Blog</h1>
      {blogs.length !== 0 && (
        <ul>
          {blogs.map((blog) => (
            <li
              key={blog.id}
              className="bg-white rounded-xl p-3 mt-5 hover:-translate-y-1 duration-300 transition-all"
            >
              <Link key={blog.id} to={`/blog/${blog.id}`}>
                <h2 className="text-2xl font-light tracking-wider ">
                  {blog.title}
                </h2>
                <p className="mt-3">{blog.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Blog;
