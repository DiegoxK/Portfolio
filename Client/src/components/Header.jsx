import { useRef } from "react";

function Header() {
  const nav = useRef(null);

  const toggleMenu = () => {
    nav.current.classList.toggle("hide-mobile");
  };

  return (
    <header className="header">
      <a href="/">
        <img src="/assets/nav/NavName.png" alt="NavName" className="nav-name" />
      </a>

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
            <a href="/">
              <img src="/assets/nav/home.png" alt="Home Button" />
            </a>
          </li>

          <li className="separator">
            <div className="v-separator"></div>
          </li>

          <li>
            <a href="/about">
              <img src="/assets/nav/About.png" alt="About button" />
            </a>
          </li>

          <li className="separator">
            <div className="v-separator"></div>
          </li>

          <li>
            <a href="/myblog">
              <img src="/assets/nav/MyBlog.png" alt="Myblog button" />
            </a>
          </li>

          <li className="separator">
            <div className="v-separator"></div>
          </li>

          <li>
            <a href="/projects">
              <img src="/assets/nav/Projects.png" alt="Projects button" />
            </a>
          </li>

          <li className="separator">
            <div className="v-separator"></div>
          </li>

          {/* <li>
            <a href="/login">
              <img
                src="/assets/nav/Login.png"
                alt="Login button"
                className="login"
              />
            </a>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
