import { Link, NavLink } from "react-router-dom";
import useTranslation from "../Custom/useTranslation";
import Icons from "../Svg/Icons";
import PageLogo from "../Svg/PageLogo";
import LanguageButton from "./Micro Components/LanguageButton";

function Header({ dark }) {
  const { t } = useTranslation();

  return (
    <nav
      className={`navbar ${
        dark ? "navbar-dark" : ""
      } navbar-expand-lg py-3 header`}
    >
      <div className="container">
        <Link
          className={`navbar-brand fs-4 fw-bold ${
            dark ? "text-primary" : "text-dark"
          }`}
          to="/"
        >
          <PageLogo
            class1={dark ? "fill-primary" : "fill-secondary"}
            class2={dark ? "fill-white" : "fill-dark"}
          />
          iego Suarez
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <Icons icon="menu" size={30} className="fill-secondary" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav align-items-end me-1 me-lg-0">
            <li>
              <NavLink
                className={`nav-link fw-bolder`}
                aria-current="page"
                to="/"
              >
                {t("nav.home")}
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link fw-bolder" to="/about">
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link fw-bolder" to="/projects">
                PROJECTS
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link fw-bolder" to="/blog">
                BLOG
              </NavLink>
            </li>
            <li>
              <Link
                to="/contact"
                type="button"
                className={`btn ${
                  dark ? "btn-primary" : "btn-secondary"
                } ms-lg-3 fw-bold py-2 px-3 my-2 my-lg-0`}
              >
                Contact Now
              </Link>
            </li>
            <li>
              <LanguageButton
                dark={dark ? dark : undefined}
                className="my-2 ms-lg-3 my-lg-0"
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
