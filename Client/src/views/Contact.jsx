import { useEffect, useState, useRef } from "react";
import { Toast } from "bootstrap/dist/js/bootstrap.bundle.min.js";

import Header from "../Components/Header";
import emailjs from "@emailjs/browser";
import ToastAlert from "../Components/Micro Components/ToastAlert";

function Contact() {
  const form = useRef();
  const toastRef = useRef();
  const [toastElement, setToastElement] = useState();
  const [toastData, setToastData] = useState({
    title: "Cargando...",
    description: "Enviando el mensaje por favor espera unos momentos",
  });

  useEffect(() => {
    setToastElement(new Toast(toastRef.current, { autohide: false }));
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    toastElement.show();

    emailjs
      .sendForm(
        "service_31u0re6",
        "template_kt5jwnm",
        form.current,
        "DVdPazxdRDRy23wQ0"
      )
      .then(
        (result) => {
          setToastData({
            icon: "check",
            title: "Enviado!",
            description: "Mensaje enviado muchas gracias por comunicarte!",
          });

          setInterval(() => {
            toastElement.hide();
          }, 4000);

          e.target.reset();
        },
        (error) => {
          setToastData({
            icon: "x",
            title: "ERROR",
            description:
              "Ha ocurrido un error en el envio del mensaje, intente mas tarde.",
          });

          setInterval(() => {
            toastElement.hide();
          }, 4000);
        }
      );

    setToastData({
      title: "Cargando...",
      description: "Enviando el mensaje por favor espera unos momentos",
    });
  };

  return (
    <div className="position-relative bg-dark overflow-hidden">
      <div className="shadow-lg">
        <Header dark />
      </div>

      <div className="container">
        <div className="text-white d-flex align-items-center py-5 min-vh-100 justify-content-center">
          <div className="w-75">
            <h1
              style={{ textShadow: "5px 5px #00000052" }}
              className="display-1 fw-bold py-2 text-primary"
            >
              Contáctame
            </h1>
            <p>
              Si tienes preguntas no dudes en contactarme con el siguiente
              formulario...
            </p>
            <form ref={form} onSubmit={sendEmail} className="row gx-3 gy-2 ">
              <div className="col-md-6">
                <label htmlFor="name" className="form-label">
                  Nombre
                </label>
                <input
                  required
                  name="name"
                  type="text"
                  className="form-control border border-primary"
                  id="name"
                  placeholder="Nombre"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputEmail" className="form-label">
                  Correo
                </label>
                <input
                  name="email"
                  type="email"
                  className="form-control border border-primary"
                  placeholder="Correo@ejemplo.com"
                  id="inputEmail"
                />
              </div>
              <div className="col-12">
                <label htmlFor="Subject" className="form-label">
                  Asunto
                </label>
                <input
                  name="subject"
                  type="text"
                  className="form-control border border-primary"
                  id="Subject"
                  placeholder="Encabezado del mensaje"
                />
              </div>
              <div className="col-md-12">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Mensaje
                </label>
                <textarea
                  name="message"
                  className="form-control border border-primary"
                  id="exampleFormControlTextarea1"
                  rows="7"
                ></textarea>
              </div>
              <div className="col-12 mt-4">
                <button type="submit" className="btn btn-primary">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastAlert
        toastRef={toastRef}
        icon={toastData.icon}
        title={toastData.title}
      >
        {toastData.description}
      </ToastAlert>
    </div>
  );
}

export default Contact;
