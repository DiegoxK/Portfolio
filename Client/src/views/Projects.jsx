import { getAll } from "../../api/apiCalls";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Projects() {
  const [projects, setProjects] = useState();

  useEffect(() => {
    getAll("projects").then((res) => {
      setProjects(res.reverse());
    });
  }, []);

  return projects ? (
    <section className="page-info">
      <div className="info-container">
        <div className="project-container">
          <img
            src="/assets/projects/Projects.png"
            alt="home image"
            className="home-image"
          />
          {projects.map((project) => {
            return (
              <div className="project-card">
                <img
                  src={project.img}
                  alt="Projecto Peluditos"
                  className="project-img"
                />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <Link to={`/project/${project.url}`}>Mas Informacion</Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  ) : (
    <div>Loading</div>
  );
}

export default Projects;
