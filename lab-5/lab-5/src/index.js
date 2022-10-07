import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import NewComponent from "./NewComponent/NewComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <hr />
    <p>
      <NewComponent />
    </p>
    <hr />
    <p>
      Another para{" "}
      <span>
        <NewComponent />
      </span>
    </p>
  </React.StrictMode>
);
