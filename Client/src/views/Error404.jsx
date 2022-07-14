import React from "react";
import ErrorSvg from "../Svg/ErrorSvg";

function Error404() {
  return (
    <div className="bg-dark d-flex flex-column justify-content-center align-items-center text-center min-vh-100">
      <div className="d-none d-lg-inline mt-5">
        <ErrorSvg
          className="fill-primary"
          style={{ marginLeft: "15em", opacity: ".77" }}
        />
        <img
          src="/assets/404/AA12.svg"
          className="position-relative"
          style={{ left: "-15em", top: "-9em" }}
        />
      </div>
      <div className="container mt-4">
        <a href="/" className="text-primary fs-2 text-decoration-none">
          Page not Found.{" "}
          <span className="text-decoration-underline"> Go Back!</span>
        </a>
      </div>
    </div>
  );
}

export default Error404;
