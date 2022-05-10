function Footer() {
  return (
    <footer>
      <div className="dark-green"></div>
      <div className="green">
        <img
          src="/assets/footer/flowers.png"
          alt="flowers"
          className="flowers"
        />
      </div>
      <div className="light-green"></div>
      <div className="brown"></div>
      <div className="dark-brown">
        <ul className="info">
          <h2>Navigation</h2>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About me</a>
          </li>
          <li>
            <a href="#">My Projects</a>
          </li>
        </ul>

        <ul className="info">
          <h2>Contact Me</h2>
          <li>
            <p>example@example.com</p>
          </li>
          <li>
            <p>+57 4568414864864</p>
          </li>
        </ul>

        <div className="info">
          <h2>Find me on the Web!</h2>
          <div className="contacts">
            <a href="#">
              <img src="/assets/footer/github.svg" alt="" />
            </a>
            <a href="#">
              <img src="/assets/footer/linkedin.svg" alt="" />
            </a>
            <a href="#">
              <img src="/assets/footer/twitter.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
