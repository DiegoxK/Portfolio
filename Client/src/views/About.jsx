import ReactMarkdown from "react-markdown";
import rehypeRaw from "https://esm.sh/rehype-raw@6";
import { useEffect, useState } from "react";
import { getAll } from "../../api/apiCalls";

function About() {
  const [about, setAbout] = useState();

  useEffect(() => {
    getAll("contents").then((res) => {
      setAbout(res);
    });
  }, []);

  return about ? (
    <section className="page-info">
      {about.map((info) => {
        if (info.section !== "HomeInfo") {
          return (
            <div className="info-container" key={info._id}>
              <h2>{info.title}</h2>
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {info.description}
              </ReactMarkdown>
            </div>
          );
        }
      })}
    </section>
  ) : (
    <div>Loading</div>
  );
}

export default About;
