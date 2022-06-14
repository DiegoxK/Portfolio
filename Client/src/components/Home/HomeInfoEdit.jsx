import SimpleMDE from "react-simplemde-editor";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "https://esm.sh/rehype-raw@6";
import { useEffect, useState } from "react";
import { editData, getOne } from "../../../api/apiCalls";
import "easymde/dist/easymde.min.css";

function HomeInfoEdit() {
  const [homeInfo, setHomeInfo] = useState();
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    getOne("contents", "HomeInfo").then((res) => {
      setHomeInfo(res);
    });
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    editData("contents", homeInfo._id, homeInfo).then(() => {
      setAlert(true);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    });
  };

  const onChange = (event) => {
    setHomeInfo({
      ...homeInfo,
      [event.target.name]: event.target.value,
    });
  };

  const mdeOnChange = (value) => {
    setHomeInfo({
      ...homeInfo,
      description: value,
    });
  };

  return (
    <section className="page-info">
      {homeInfo ? (
        <form onSubmit={onSubmit} className="info-container">
          <img
            src="/assets/home/Home.png"
            alt="home image"
            className="home-image"
          />
          <input
            type="text"
            name="title"
            value={homeInfo.title}
            onChange={onChange}
          />
          <SimpleMDE value={homeInfo.description} onChange={mdeOnChange} />
          <button type="submit">Editar</button>
          <div>
            {alert ? (
              <p style={{ color: "green" }} className="edit-alert">
                Editado con exito
              </p>
            ) : (
              ""
            )}
          </div>
          <h2>{homeInfo.title}</h2>
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {homeInfo.description}
          </ReactMarkdown>
        </form>
      ) : (
        <div>Loading</div>
      )}
    </section>
  );
}

export default HomeInfoEdit;
