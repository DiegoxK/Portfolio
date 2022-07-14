import React from "react";

function TopicsNav() {
  return (
    <div className="nav-scroller rounded-3 p-3 my-2 bg-white">
      <nav className="nav d-flex justify-content-between">
        <a className="p-2 link-dark" href="#">
          World
        </a>
        <a className="p-2 link-dark" href="#">
          U.S.
        </a>
        <a className="p-2 link-dark" href="#">
          Technology
        </a>
        <a className="p-2 link-dark" href="#">
          Design
        </a>
        <a className="p-2 link-dark" href="#">
          Culture
        </a>
        <a className="p-2 link-dark" href="#">
          Business
        </a>
        <a className="p-2 link-dark" href="#">
          Politics
        </a>
        <a className="p-2 link-dark" href="#">
          Opinion
        </a>
        <a className="p-2 link-dark" href="#">
          Science
        </a>
        <a className="p-2 link-dark" href="#">
          Health
        </a>
        <a className="p-2 link-dark" href="#">
          Style
        </a>
        <a className="p-2 link-dark" href="#">
          Travel
        </a>
      </nav>
    </div>
  );
}

export default TopicsNav;
