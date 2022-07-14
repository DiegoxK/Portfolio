import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Styles/main.scss";
import Store from "./Controller/Store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Store>
      <App />
    </Store>
  </React.StrictMode>
);
