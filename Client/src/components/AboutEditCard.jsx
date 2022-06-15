import SimpleMDE from "react-simplemde-editor";
import ReactMarkdown from "react-markdown";
import BasicAlert from "./BasicAlert";
import rehypeRaw from "https://esm.sh/rehype-raw@6";
import { useState } from "react";
import { editData } from "../../api/apiCalls";

const AboutEditCard = ({ info }) => {
  const [data, setData] = useState(info);
  const [alert, setAlert] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    editData("contents", data._id, data).then((res) => {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 3000);
    });
  };

  const onChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const mdeOnChange = (value) => {
    setData({
      ...data,
      description: value,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="info-container">
        <input
          onChange={onChange}
          type="text"
          name="title"
          value={data.title}
        />
        <SimpleMDE value={data.description} onChange={mdeOnChange} />
        <button type="submit">Editar</button>
        <BasicAlert state={alert} />
        <h2>{data.title}</h2>
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {data.description}
        </ReactMarkdown>
      </div>
    </form>
  );
};

export default AboutEditCard;
