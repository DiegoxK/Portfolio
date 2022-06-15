import ReactMarkdown from "react-markdown";
import SimpleMDE from "react-simplemde-editor";
import rehypeRaw from "https://esm.sh/rehype-raw@6";
import BasicAlert from "../../components/BasicAlert.jsx";
import { addData, deleteById, getAll } from "../../../api/apiCalls";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProjectsEdition = () => {
  const [projects, setProjects] = useState();
  const [newProject, setNewProject] = useState(false);
  const [alert, setAlert] = useState(false);
  const [project, setProject] = useState({
    title: "",
    url: "",
    img: "",
    description: "",
    md: "",
  });

  useEffect(() => {
    getAll("projects").then((res) => {
      setProjects(res.reverse());
    });
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    addData("projects", project).then(() => {
      setAlert(true);
      getAll("projects").then((res) => {
        setProjects(res.reverse());
      });
      setTimeout(() => {
        setAlert(false);
        setNewProject(false);
      }, 2000);
      setProject({
        title: "",
        url: "",
        img: "",
        description: "",
        md: "",
      });
    });
  };

  const onChange = (event) => {
    setProject({
      ...project,
      [event.target.name]: event.target.value,
    });
  };

  const onDelete = (id) => {
    deleteById("projects", id).then(() => {
      getAll("projects").then((res) => {
        setProjects(res.reverse());
      });
    });
  };

  const mdeOnChange = (value) => {
    setProject({
      ...project,
      md: value,
    });
  };

  return projects ? (
    <section className="page-info">
      <div>
        {newProject ? (
          <section className="page-info">
            <button
              onClick={() => {
                setNewProject(false);
              }}
            >
              Cancel
            </button>
            <form className="info-container" onSubmit={onSubmit}>
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
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {project.md}
              </ReactMarkdown>
            </form>
          </section>
        ) : (
          <button
            onClick={() => {
              setNewProject(true);
            }}
          >
            New project
          </button>
        )}
      </div>
      <div className="info-container">
        <div className="project-container">
          {projects.map((project) => {
            return (
              <div key={project._id} className="project-card">
                <img
                  src={project.img}
                  alt={project.title}
                  className="project-img"
                />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <Link to={`/project/${project.url}`}>Editar</Link>
                <button
                  onClick={() => {
                    onDelete(project._id);
                  }}
                >
                  Delete Project
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  ) : (
    <div>Loading</div>
  );
};

export default ProjectsEdition;
