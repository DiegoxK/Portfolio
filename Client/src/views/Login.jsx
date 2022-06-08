import { useState, useContext } from "react";
import { UserContext } from "../context/UserContex";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/apiCalls";

function Login() {
  const history = useNavigate();

  const { setUserState } = useContext(UserContext);

  const [alert, setAlert] = useState(false);
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(user)
      .then(() => {
        setUserState(true);
        history("/");
      })
      .catch(() => {
        setAlert(true);
        setTimeout(() => {
          setAlert(false);
        }, 5000);
      });
  };

  return (
    <section className="login">
      <div className="login-container">
        <div className="alert">
          <p>
            Para editar el contenido de la pagina primero debe autentificarse
          </p>
        </div>
        <form onSubmit={handleSubmit} className="login-form">
          <h2>INGRESAR</h2>
          <input
            name="userName"
            required
            onChange={handleChange}
            placeholder="User"
            type="text"
          />
          <input
            name="password"
            required
            onChange={handleChange}
            placeholder="Password"
            type="password"
          />
          <input className="submit-button" type="submit" />
          <div>
            {alert ? (
              <p className="login-failed">"Usuario o contraseña incorrectos"</p>
            ) : (
              ""
            )}
          </div>
          <a href="/">Regresar</a>
        </form>
      </div>
    </section>
  );
}

export default Login;
