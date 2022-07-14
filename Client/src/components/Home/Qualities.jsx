import Figures from "../../Svg/Figures";
import SvgCard from "../Micro Components/SvgCard";

function Qualities() {
  return (
    <div className="position-relative overflow-hidden qualities">
      <Figures type="x" className="position-absolute x stroke-secondary" />
      <Figures
        type="x"
        className="position-absolute x-2 fill-primary stroke-dark"
      />
      <Figures
        type="square"
        className="position-absolute square fill-secondary stroke-secondary"
      />
      <Figures
        type="square"
        className="position-absolute square-2 fill-dark stroke-dark"
      />
      <div className="container">
        <div className="py-5">
          <div className="d-flex justify-content-center py-5">
            <h2 className="fw-bold fs-1 align-self-md-center">
              Todo lo que necesitas para el sitio web perfecto
            </h2>
          </div>
          <div className="row g-4 px-4 px-sm-0 row-cols-1 row-cols-lg-3">
            <SvgCard />
            <SvgCard />
            <SvgCard />
            <SvgCard />
            <SvgCard />
            <SvgCard />
          </div>
          <div className="py-5"></div>
        </div>
      </div>
    </div>
  );
}

export default Qualities;
