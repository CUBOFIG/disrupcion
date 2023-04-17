import "sass/main.scss";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "moment/locale/es";
import { GlobalProvider } from "./contexts/Global.provider";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <GlobalProvider>
    <App />
  </GlobalProvider>
  // </React.StrictMode>
);
