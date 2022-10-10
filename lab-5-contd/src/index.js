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
      <NewComponent nameNew="Component 1" value={10} noName="Test"/>
    </p>
  </React.StrictMode>
);
