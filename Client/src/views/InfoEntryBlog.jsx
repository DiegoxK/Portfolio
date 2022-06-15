import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOne } from "../../api/apiCalls";

function InfoEntry() {
  const [post, setPost] = useState([]);

  const { postid } = useParams();

  useEffect(() => {
    getOne("blog", postid).then((res) => {
      setPost(res);
    });
  }, []);

  return (
    <section className="page-info">
      <div className="info-container">
        <h2>{post.title}</h2>
        <ReactMarkdown>{post.md}</ReactMarkdown>
      </div>
    </section>
  );
}

export default InfoEntry;
