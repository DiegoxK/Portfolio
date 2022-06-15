import { useEffect, useState } from "react";
import { getAll } from "../../../api/apiCalls";
import AboutEditCard from "../../components/AboutEditCard";

function AboutEdition() {
  const [about, setAbout] = useState();

  useEffect(() => {
    getAll("contents").then((res) => {
      setAbout(res);
    });
  }, []);

  return about ? (
    <div className="page-info">
      {about.map((info) => {
        if (info.section !== "HomeInfo") {
          return <AboutEditCard key={info._id} info={info} />;
        }
      })}
    </div>
  ) : (
    <div>loading</div>
  );
}

export default AboutEdition;
