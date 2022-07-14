import Figures from "../Svg/Figures";

function BackGround({ section }) {
  switch (section) {
    case "home":
      return (
        <>
          <Figures
            type="circles"
            className="position-absolute circles stroke-primary opacity-50"
          />
          <Figures type="elipse" className="position-absolute elipse" />
          <Figures
            type="triangles"
            className="position-absolute triangles fill-primary"
          />
          <Figures
            type="linesCircle"
            className="position-absolute linesCircle"
          />
          <Figures type="lines" className="position-absolute lines" />
          <Figures type="x" className="position-absolute x stroke-primary" />
          <Figures
            type="x"
            className="position-absolute x-2 fill-primary stroke-white"
          />
          <Figures
            type="donut"
            className="position-absolute donut fill-white"
          />
          <Figures
            type="donut"
            className="position-absolute donut-2 fill-primary"
          />
          <Figures
            type="square"
            className="position-absolute square fill-primary"
          />
          <Figures
            type="square"
            className="position-absolute square-2 fill-white"
          />
          <Figures
            type="square"
            className="position-absolute square-2 fill-white"
          />
        </>
      );

    case "projects":
      return (
        <>
          <Figures type="elipse" className="position-absolute elipse" />
          <Figures
            type="likeALotOfDots"
            className="position-absolute dots fill-primary"
          />
          <Figures type="x" className="position-absolute x stroke-primary" />
          <Figures type="x" className="position-absolute x-2  stroke-white" />
          <Figures
            type="square"
            className="position-absolute square fill-secondary stroke-secondary"
          />
          <Figures
            type="square"
            className="position-absolute square-2 fill-white stroke-dark"
          />
          <Figures
            type="donut"
            className="position-absolute donut fill-white"
          />
          <Figures
            type="donut"
            className="position-absolute donut-2 fill-primary"
          />
          <Figures
            type="circles-2"
            className="position-absolute circles-2 fill-primary"
          />
          <Figures
            type="curvedLines"
            className="position-absolute curved-line stroke-white"
          />
          <Figures
            type="curvedLines"
            className="position-absolute curved-line-2 stroke-primary"
          />
          <Figures
            type="curvedLines"
            className="position-absolute curved-line-3 stroke-primary"
          />
          <Figures
            type="curvedLines"
            className="position-absolute curved-line-3 stroke-primary"
          />
          <Figures
            type="linesCircle"
            className="position-absolute lines-circle"
          />
          <Figures
            type="triangles"
            className="position-absolute triangles fill-white"
          />
          <div className="position-absolute bg-primary circle"></div>
          <div className="position-absolute bg-white circle-2"></div>
        </>
      );

    default:
      break;
  }
}

export default BackGround;
