import Header from "../Components/Header";
import BackGround from "../Components/Background";
import ProjectCard from "../Components/Micro Components/ProjectCard";

function Projects() {
  const items = [
    {
      id: "1",
      title: "Short title, long jacket and long title again",
      topic: "Web development",
      icon: "web",
      date: "5d",
      img: "https://images.unsplash.com/photo-1415369629372-26f2fe60c467?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
      id: "2",
      title: "Short title, long jacket and long title again",
      topic: "Desing",
      icon: "desing",
      date: "3d",
      img: "https://images.unsplash.com/photo-1542837336-d14bdf342f9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=457&q=80",
    },
    {
      id: "3",
      title: "Short title, long jacket and long title again",
      topic: "Web development",
      icon: "games",
      date: "1d",
      img: "https://images.unsplash.com/photo-1595744043037-68de3376ed59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
    },
  ];

  return (
    <div className="position-relative overflow-hidden bg-dark projects">
      <BackGround section="projects" />
      <Header dark />
      <div className="py-5">
        <div className="d-flex flex-column justify-content-center align-items-center text-center min-vh-100">
          <div className="container">
            <div className="row row-cols-1 justify-content-center row-cols-lg-3 g-4 py-4">
              {items.map(({ title, topic, icon, date, img, id }) => {
                return (
                  <div key={id} className="col my-3">
                    <ProjectCard
                      title={title}
                      topic={topic}
                      icon={icon}
                      date={date}
                      id={id}
                      backgroundImage={img}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
