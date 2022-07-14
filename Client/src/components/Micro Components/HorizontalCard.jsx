import React from "react";

function HorizontalCard({ img, title, span, children, type }) {
  if (type === "img-end") {
    return (
      <div className="row featurette">
        <div className="col-md-7 my-lg-5">
          <h2 className="featurette-heading fw-bold fs-1 lh-1">
            {title} <span className="text-primary">{span}</span>
          </h2>
          <p className="lead ">{children}</p>
        </div>
        <div className="col-md-5">
          <img
            className="img-fluid"
            src={img}
            alt="Web Development!"
            width={500}
          />
        </div>
      </div>
    );
  } else if (type === "img-start") {
    return (
      <div className="row featurette">
        <div className="col-md-7 order-md-2 my-lg-5">
          <h2 className="featurette-heading fw-bold fs-1 lh-1">
            <span className="text-primary">{span} </span>
            {title}
          </h2>
          <p className="lead">{children}</p>
        </div>
        <div className="col-md-5 order-md-1">
          <img
            className="img-fluid"
            src={img}
            alt="Web Development!"
            width={500}
          />
        </div>
      </div>
    );
  }
}

export default HorizontalCard;
