import ReactMarkdown from "react-markdown";
import SimpleMDE from "react-simplemde-editor";
import rehypeRaw from "https://esm.sh/rehype-raw@6";
import BasicAlert from "../../components/BasicAlert.jsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addData, deleteById, getAll } from "../../../api/apiCalls";

const MyBlogEdition = () => {
  const [blogs, setBlogs] = useState();
  const [alert, setAlert] = useState(false);
  const [newPost, setNewPost] = useState(false);
  const [post, setPost] = useState({
    section: "",
    url: "",
    title: "",
    preview: "",
    description: "",
    md: "",
  });

  useEffect(() => {
    getAll("blog").then((res) => {
      setBlogs(res.reverse());
    });
  }, []);

  const onDelete = (id) => {
    deleteById("blog", id).then(() => {
      getAll("blog").then((res) => {
        setBlogs(res.reverse());
      });
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addData("blog", post).then(() => {
      setAlert(true);
      getAll("blog").then((res) => {
        setBlogs(res.reverse());
      });
      setTimeout(() => {
        setAlert(false);
        setNewPost(false);
      }, 2000);
      setPost({
        section: "",
        url: "",
        title: "",
        preview: "",
        description: "",
        md: "",
      });
    });
  };

  const onChange = (event) => {
    setPost({
      ...post,
      [event.target.name]: event.target.value,
    });
  };

  const mdeOnChange = (value) => {
    setPost({
      ...post,
      md: value,
    });
  };

  return blogs ? (
    <section className="page-info">
      <div>
        {newPost ? (
          <section className="page-info">
            <button
              onClick={() => {
                setNewPost(false);
              }}
            >
              Cancel
            </button>
            <form className="info-container" onSubmit={onSubmit}>
              <input
                style={{ width: "100%", fontSize: "20px" }}
                type="text"
                name="section"
                placeholder="section"
                onChange={onChange}
                value={post.section}
              />
              <input
                style={{ width: "100%", fontSize: "20px" }}
                type="text"
                name="title"
                placeholder="title"
                onChange={onChange}
                value={post.title}
              />
              <textarea
                style={{ width: "100%", fontSize: "20px" }}
                name="preview"
                maxLength="70"
                rows="10"
                placeholder="preview"
                onChange={onChange}
                value={post.preview}
              />
              <textarea
                style={{ width: "100%", fontSize: "20px" }}
                name="description"
                rows="10"
                placeholder="description"
                onChange={onChange}
                value={post.description}
              />
              <SimpleMDE value={post.md} onChange={mdeOnChange} />
              <button type="submit">Enviar</button>
              <BasicAlert state={alert} />
              <h2>{post.title}</h2>
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {post.md}
              </ReactMarkdown>
            </form>
          </section>
        ) : (
          <button
            onClick={() => {
              setNewPost(true);
            }}
          >
            New post
          </button>
        )}
      </div>
      {blogs.map((post) => {
        return (
          <div key={post._id} className="info-container">
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <Link to={`/posts/${post.url}`}>Editar</Link>
            <button
              onClick={() => {
                onDelete(post._id);
              }}
            >
              Delete Post
            </button>
          </div>
        );
      })}
    </section>
  ) : (
    <div>loading</div>
  );
};

export default MyBlogEdition;
