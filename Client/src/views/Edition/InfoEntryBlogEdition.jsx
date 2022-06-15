import ReactMarkdown from "react-markdown";
import SimpleMDE from "react-simplemde-editor";
import rehypeRaw from "https://esm.sh/rehype-raw@6";
import BasicAlert from "../../components/BasicAlert.jsx";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { editData, getOne } from "../../../api/apiCalls.js";

function InfoEntryEdition() {
  const { postid } = useParams();
  const [post, setPost] = useState();
  const [alert, setAlert] = useState(false);

  const history = useNavigate();

  useEffect(() => {
    getOne("blog", postid).then((res) => {
      setPost(res);
    });
  }, []);

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

  const editPost = (event) => {
    event.preventDefault();
    editData("blog", post._id, post).then(() => {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
        history("/myblog");
      }, 2000);
    });
  };

  return post ? (
    <section className="page-info">
      <form className="info-container" onSubmit={editPost}>
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
        <button type="submit">Editar</button>
        <BasicAlert state={alert} />
        <h2>{post.title}</h2>
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{post.md}</ReactMarkdown>
      </form>
    </section>
  ) : (
    <div>loading</div>
  );
}

export default InfoEntryEdition;
