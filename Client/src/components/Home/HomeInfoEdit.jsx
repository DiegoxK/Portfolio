import { useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import ReactMarkdown from "react-markdown";
import "easymde/dist/easymde.min.css";

function HomeInfoEdit() {
  const [markdownValue, setMarkdownValue] = useState("");

  const onChange = (value) => {
    setMarkdownValue(value);
    // console.log(markdownValue);
  };

  return (
    <section className="page-info">
      <div className="info-container">
        <img
          src="/assets/home/Home.png"
          alt="home image"
          className="home-image"
        />
        <h2>Diego Suarez</h2>
        <SimpleMDE value={markdownValue} onChange={onChange} />
        <ReactMarkdown>{markdownValue}</ReactMarkdown>
      </div>
    </section>
  );
}

export default HomeInfoEdit;
