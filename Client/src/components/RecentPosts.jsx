import { useEffect, useState } from "react";
import { getAll } from "../../api/apiCalls";

function RecentPosts() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getAll("blog").then((res) => {
      setBlogs(res);
    });
  }, []);

  return (
    <section className="recent-posts">
      <ul className="posts-container">
        <h2 className="posts-title">Recent Posts</h2>
        {blogs.map((post) => {
          return (
            <li key={post._id}>
              <h3>{post.title}</h3>
              <p>{post.preview}</p>
              <a href={`/posts/${post.url}`}>Leer mas</a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default RecentPosts;
