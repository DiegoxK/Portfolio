import Icons from "../Svg/Icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div style={{ marginTop: "-1px" }} className="bg-dark">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3  border-top">
        <div className="col-md-4 col-xxl-3 d-flex align-items-center">
          <Link to="/login" className="ms-3">
            <Icons icon="pencil" size={23} className="fill-primary" />
          </Link>
          <span className="ms-3 ms-lg-4 text-primary fw-bold">
            Portafolio Personal
          </span>
        </div>
        <ul className="nav me-5 col-md-4 footer-contacts justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a href="#">
              <Icons icon="twitter" className="fill-primary" />
            </a>
          </li>
          <li className="ms-3">
            <a href="#">
              <Icons icon="github" className="fill-primary" />
            </a>
          </li>
          <li className="ms-3">
            <a href="#">
              <Icons icon="linkedin" className="fill-primary" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
