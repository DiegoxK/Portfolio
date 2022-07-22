import Header from "../Components/Header";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="position-relative bg-dark overflow-hidden">
      <div className="shadow-lg">
        <Header dark />
      </div>
      <div className="d-flex justify-content-center">
        <svg
          width="150"
          height="150"
          viewBox="0 0 101 115"
          className="position-absolute position"
          style={{ top: "20%", zIndex: "0" }}
        >
          <clipPath id="profile-img">
            <path
              d="M2.20354 29.616L50.5 1.73205L98.7965 29.616V85.384L50.5 113.268L2.20354 85.384V29.616Z"
              fill="#2b2b2b"
            />
          </clipPath>
          <image
            width="101"
            height="115"
            href="https://i.imgur.com/pUDsuDM.jpg"
            clipPath="url(#profile-img)"
          />
        </svg>
      </div>
      <div className="row row-cols-1 row-cols-lg-2 overflow-hidden about">
        <div className="container bg-img d-flex flex-column justify-content-center align-items-center text-center min-vh-100 text-white bg-dark">
          <h1
            style={{ textShadow: "5px 5px #00000052" }}
            className="display-1 fw-bold px-5 py-2"
          >
            Sobre Mi
          </h1>
        </div>
        <div className="container px-2 px-lg-5">
          <div className="p-5 text-white">
            <div className="py-3">
              <h3>Who i am</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                optio qui, modi deserunt voluptates officia veritatis repellat
                ab atque nostrum architecto fugiat! Id harum est odit quia
                voluptates recusandae qui?
              </p>
            </div>
            <div className="py-3">
              <h3>Art Direction</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                optio qui, modi deserunt voluptates officia veritatis repellat
                ab atque nostrum architecto fugiat! Id harum est odit quia
                voluptates recusandae qui?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                optio qui, modi deserunt voluptates officia veritatis repellat
                ab atque nostrum architecto fugiat! Id harum est odit quia
                voluptates recusandae qui?
              </p>
            </div>
            <div className="py-3">
              <h3>Ux desing</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                optio qui, modi deserunt voluptates officia veritatis repellat
                ab atque nostrum architecto fugiat! Id harum est odit quia
                voluptates recusandae qui?
              </p>
              <p>My process of digital experience development</p>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Research
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body bg-white text-dark">
                      <strong>This is the first item's accordion body.</strong>{" "}
                      It is shown by default, until the collapse plugin adds the
                      appropriate classNamees that we use to style each element.
                      These classNamees control the overall appearance, as well
                      as the showing and hiding via CSS transitions. You can
                      modify any of this with custom CSS or overriding our
                      default variables. It's also worth noting that just about
                      any HTML can go within the <code>.accordion-body</code>,
                      though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Structure
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body bg-white text-dark">
                      <strong>This is the second item's accordion body.</strong>{" "}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classNamees that we use to style each
                      element. These classNamees control the overall appearance,
                      as well as the showing and hiding via CSS transitions. You
                      can modify any of this with custom CSS or overriding our
                      default variables. It's also worth noting that just about
                      any HTML can go within the <code>.accordion-body</code>,
                      though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Creation
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body bg-white text-dark">
                      <strong>This is the third item's accordion body.</strong>{" "}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classNamees that we use to style each
                      element. These classNamees control the overall appearance,
                      as well as the showing and hiding via CSS transitions. You
                      can modify any of this with custom CSS or overriding our
                      default variables. It's also worth noting that just about
                      any HTML can go within the <code>.accordion-body</code>,
                      though the transition does limit overflow.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-3">
              <h3>Coding</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                optio qui, modi deserunt voluptates officia veritatis repellat
                ab atque nostrum architecto fugiat! Id harum est odit quia
                voluptates recusandae qui?
              </p>
              <p>My process of digital experience development</p>
              <ul>
                <li>
                  <p>Research</p>
                </li>
                <li>
                  <p>Structure</p>
                </li>
                <li>
                  <p>Concept and strategy</p>
                </li>
                <li>
                  <p>Create</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
