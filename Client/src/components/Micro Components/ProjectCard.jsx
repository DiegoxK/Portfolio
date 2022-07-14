import Icons from "../../Svg/Icons";
import { motion } from "framer-motion";

function ProjectCard({ title, topic, icon, backgroundImage, date, id }) {
  return (
    <>
      <motion.div
        style={{
          height: "25em",
        }}
        whileHover={{ scale: 1.1 }}
        className="card card-cover mx-1 overflow-hidden text-white bg-dark rounded-4 shadow-lg position-relative"
      >
        <img
          className="opacity-50 position-absolute w-100"
          src={backgroundImage}
        />
        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1 position-relative">
          <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
            <a
              className="text-white text-decoration-none stretched-link "
              href="/project/awa"
            >
              {title}
            </a>
          </h2>
          <ul className="d-flex list-unstyled mt-auto">
            <li className="me-auto">
              <Icons icon={icon} size={30} className="fill-secondary" />
            </li>
            <li className="d-flex align-items-center me-3">
              <svg className="bi me-2" width="1em" height="1em">
                <use xlinkHref="#geo-fill" />
              </svg>
              <small>{topic}</small>
            </li>
            <li className="d-flex align-items-center">
              <Icons icon="calendar" className="fill-secondary me-2 " />
              <small>{date}</small>
            </li>
          </ul>
        </div>
      </motion.div>
    </>
  );
}

export default ProjectCard;
