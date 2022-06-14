import { useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../api/apiCalls";
import { UserContext } from "../context/UserContex";

function Header() {
  const nav = useRef(null);

  const { userState } = useContext(UserContext);

  const toggleMenu = () => {
    nav.current.classList.toggle("hide-mobile");
  };

  return (
    <header className="header">
      <Link to="/">
        <img src="/assets/nav/NavName.png" alt="NavName" className="nav-name" />
      </Link>

      <nav>
        <a onClick={toggleMenu} className="hide-desktop">
          <img src="/assets/nav/ham.svg" alt="toggle-menu" className="menu" />
        </a>

        <ul ref={nav} className="show-desktop hide-mobile" id="nav">
          <li onClick={toggleMenu} id="exit" className="exit-btn hide-desktop">
            <img src="/assets/nav/exit.svg" alt="exit menu" />
          </li>

          <li className="separator">
            <div className="v-separator"></div>
          </li>

          <li>
            <Link to="/">
              <img src="/assets/nav/home.png" alt="Home Button" />
            </Link>
          </li>

          <li className="separator">
            <div className="v-separator"></div>
          </li>

          <li>
            <Link to="/about">
              <img src="/assets/nav/About.png" alt="About button" />
            </Link>
          </li>

          <li className="separator">
            <div className="v-separator"></div>
          </li>

          <li>
            <Link to="/myblog">
              <img src="/assets/nav/MyBlog.png" alt="Myblog button" />
            </Link>
          </li>

          <li className="separator">
            <div className="v-separator"></div>
          </li>

          <li>
            <Link to="/projects">
              <img src="/assets/nav/Projects.png" alt="Projects button" />
            </Link>
          </li>

          <li className="separator">
            <div className="v-separator"></div>
          </li>
          {/* <li>
            {userState ? (
              <a
                onClick={() => {
                  logout();
                  window.location.reload();
                }}
              >
                <img
                  src="/assets/nav/check.svg"
                  alt="Cerrar la edition"
                  style={{ width: "33px", cursor: "pointer" }}
                />
              </a>
            ) : (
              ""
            )}
          </li> */}
          <li>
            {userState ? (
              <a
                onClick={() => {
                  logout();
                  window.location.reload();
                }}
              >
                <img
                  src="/assets/nav/exit.svg"
                  alt="Cerrar la edition"
                  className="edit-button"
                />
              </a>
            ) : (
              <Link to="/login">
                <img
                  src="/assets/nav/edit.svg"
                  alt="Boton de edicion"
                  className="edit-button"
                />
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
