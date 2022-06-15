import ReactMarkdown from "react-markdown";
import rehypeRaw from "https://esm.sh/rehype-raw@6";
import { useEffect, useState } from "react";
import { getOne } from "../../../api/apiCalls";

function HomeInfo() {
  const [homeInfo, setHomeInfo] = useState([]);

  useEffect(() => {
    getOne("contents", "62a4c10564301afadb814331").then((res) => {
      setHomeInfo(res);
    });
  }, []);

  return (
    <section className="page-info">
      <div className="info-container">
        <img
          src="/assets/home/Home.png"
          alt="home image"
          className="home-image"
        />
        <h2>{homeInfo.title}</h2>
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {homeInfo.description}
        </ReactMarkdown>
      </div>
    </section>
  );
}

export default HomeInfo;
