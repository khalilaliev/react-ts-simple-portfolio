import { FC } from "react";
import { blogs } from "../data/blog";
import { useParams } from "react-router-dom";

const BlogDetails: FC = () => {
  const { id } = useParams<{ id: string }>();
  const blog = blogs.find((p) => p.id === Number(id));

  console.log(blog);

  if (!blog) {
    return <div>Blog not Found!</div>;
  }
  return (
    <>
      <img
        src={blog.imageUrl}
        alt={blog.title}
        className=" rounded-xl min-h-44 w-full object-cover shadow-lg"
      />
      {blog.activity?.length !== 0 && (
        <ul>
          {blog.activity?.map((a, index) => (
            <li key={a.id} className="mt-6">
              <p className="mt-3">
                <strong>{index + 1}</strong>. {a.label}
              </p>
              {a.img && (
                <img
                  src={a.img}
                  alt="TailwindCSS"
                  className="rounded-lg mt-3"
                />
              )}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default BlogDetails;
