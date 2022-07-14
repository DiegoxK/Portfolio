import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="bg-dark position-relative d-flex flex-column justify-content-center align-items-center text-center min-vh-100">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="position-absolute bottom-0 fill-primary"
        viewBox="0 0 1440 320"
      >
        <path
          fillOpacity="1"
          d="M0,96L40,96C80,96,160,96,240,133.3C320,171,400,245,480,261.3C560,277,640,235,720,229.3C800,224,880,256,960,245.3C1040,235,1120,181,1200,165.3C1280,149,1360,171,1400,181.3L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>

      <main className="mb-5">
        <h1 className="h3 fw-normal text-white mb-5">
          Para editar o agregar contenido a la pagina primero debe
          autentificarse!
        </h1>
        <form className=" form-signin mb-3 m-auto w-25">
          <div className=" mb-2 form-floating">
            <input
              type="text"
              className="form-control border border-primary"
              id="user"
            />
            <label htmlFor="user">Usuario</label>
          </div>
          <div className=" mb-3 form-floating">
            <input
              type="password"
              className="form-control border border-primary"
              id="floatingPassword"
            />
            <label htmlFor="floatingPassword">Contraseña</label>
          </div>
          <button
            className="w-100 btn btn-lg btn-primary position-relative"
            type="submit"
          >
            Ingresar
          </button>
        </form>
        <Link to="/" className="mt-5 text-white position-relative">
          Regresar
        </Link>
      </main>
    </div>
  );
}

export default Login;
