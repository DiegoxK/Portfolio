import Header from "../Components/Header";

function ProjectView() {
  return (
    <div className="bg-dark min-vh-100">
      <Header dark />
      <div className="container bg-dark shadow-sm text-white p-5 ">
        <div className="row g-5">
          <div className="col-md-8">
            <article className="blog-post"></article>
          </div>
          <div className="col-md-4">
            <div className="position-sticky" style={{ top: "2rem" }}>
              <div className="p-4 mb-3 bg-dark border border-2 border-primary rounded">
                <h4 className="fst-italic">About</h4>
                <p className="mb-0">
                  Customize this section to tell your visitors a little bit
                  about your publication, writers, content, or something else
                  entirely. Totally up to you.
                </p>
              </div>

              <div className=" shadow-sm ">
                <div className="p-4">
                  <h4 className="fst-italic">Other projects</h4>
                  <ol className="list-unstyled">
                    <li>
                      <a href="#">Project1</a>
                    </li>
                    <li>
                      <a href="#">Project2</a>
                    </li>
                    <li>
                      <a href="#">Project3</a>
                    </li>
                  </ol>
                </div>

                <div className="p-4">
                  <h4 className="fst-italic">Elsewhere</h4>
                  <ol className="list-unstyled">
                    <li>
                      <a href="#">GitHub</a>
                    </li>
                    <li>
                      <a href="#">Twitter</a>
                    </li>
                    <li>
                      <a href="#">Facebook</a>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectView;
