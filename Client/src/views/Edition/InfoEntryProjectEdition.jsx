import ReactMarkdown from "react-markdown";
import SimpleMDE from "react-simplemde-editor";
import rehypeRaw from "https://esm.sh/rehype-raw@6";
import BasicAlert from "../../components/BasicAlert.jsx";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { editData, getOne } from "../../../api/apiCalls.js";

function InfoEntryProjectEdition() {
  const { projectid } = useParams();
  const [project, setProject] = useState();
  const [alert, setAlert] = useState(false);

  const history = useNavigate();

  useEffect(() => {
    getOne("projects", projectid).then((res) => {
      setProject(res);
    });
  }, []);

  const onChange = (event) => {
    setProject({
      ...project,
      [event.target.name]: event.target.value,
    });
  };

  const mdeOnChange = (value) => {
    setProject({
      ...project,
      md: value,
    });
  };

  const editProject = (event) => {
    event.preventDefault();
    editData("projects", project._id, project).then(() => {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
        history("/projects");
      }, 2000);
    });
  };

  return project ? (
    <section className="page-info">
      <form className="info-container" onSubmit={editProject}>
        <input
          style={{ width: "100%", fontSize: "20px" }}
          type="text"
          name="title"
          placeholder="title"
          onChange={onChange}
          value={project.title}
        />
        <textarea
          style={{ width: "100%", fontSize: "20px" }}
          name="img"
          maxLength="70"
          rows="10"
          placeholder="imagen"
          onChange={onChange}
          value={project.img}
        />
        <textarea
          style={{ width: "100%", fontSize: "20px" }}
          name="description"
          rows="10"
          placeholder="description"
          onChange={onChange}
          value={project.description}
        />
        <SimpleMDE value={project.md} onChange={mdeOnChange} />
        <button type="submit">Enviar</button>
        <BasicAlert state={alert} />
        <h2>{project.title}</h2>
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{project.md}</ReactMarkdown>
      </form>
    </section>
  ) : (
    <div>loading</div>
  );
}

export default InfoEntryProjectEdition;
