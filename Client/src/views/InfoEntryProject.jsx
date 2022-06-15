import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOne } from "../../api/apiCalls";

function InfoEntryProject() {
  const [project, setProject] = useState([]);

  const { projectid } = useParams();

  useEffect(() => {
    getOne("projects", projectid).then((res) => {
      setProject(res);
    });
  }, []);

  return (
    <section className="page-info">
      <div className="info-container">
        <h2>{project.title}</h2>
        <ReactMarkdown>{project.md}</ReactMarkdown>
      </div>
    </section>
  );
}

export default InfoEntryProject;
