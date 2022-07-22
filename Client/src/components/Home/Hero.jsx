import Figures from "../../Svg/Figures";

function Hero() {
  return (
    <div className="d-flex px-4 py-5 container">
      <div className="text-white  align-self-center">
        <div className="my-5">
          <div className="d-flex">
            <Figures type="IDKWTI" className="position-relative IDKWTI" />
            <div>
              <div className="col-lg-5 my-3">
                <div className="line mb-2"></div>
                {/* <h1 className="fw-bold fs-1 lh-1">{home.title}</h1> */}
                <Figures
                  type="dots"
                  className="position-relative dots fill-primary"
                />
              </div>
              <div className="d-flex">
                <p className="fw-light text-white col-lg-9 fs-4 ">
                  Quickly design and customize responsive mobile-first sites
                  with Bootstrap, the world's most popular front-end open source
                  toolkit, featuring Sass variables and mixins, responsive and
                  grid system.
                </p>
                <Figures type="triangle" />
              </div>
            </div>
          </div>
          <div className="d-grid gap-2 d-sm-flex my-5 ">
            <a
              href="/projects"
              type="button"
              className="btn btn-primary btn-lg px-4 gap-3"
            >
              My Projects
            </a>
            <a
              href="/contact"
              type="button"
              className="border border-3 border-primary btn btn-dark btn-lg px-4"
            >
              Contact Me!
            </a>
          </div>
          <div>
            <div className="d-flex justify-content-center hero-bottom">
              <div className="switch ">
                <div className="circle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
