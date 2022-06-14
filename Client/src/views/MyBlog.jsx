import { getAll } from "../../api/apiCalls";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MyBlog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getAll("blog").then((res) => {
      setBlogs(res);
    });
  }, []);

  return (
    <section className="page-info">
      {blogs.map((post) => {
        return (
          <div key={post._id} className="info-container">
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <Link to={`/posts/${post.url}`}>Leer mas</Link>
          </div>
        );
      })}
    </section>
  );
}

export default MyBlog;
