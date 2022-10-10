import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import NewComponent from "./NewComponent/NewComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));
const myDefinition = {
  name: "Heading 3",
  value: "Test Header",
};
root.render(
  <React.StrictMode>
    <NewComponent definition={myDefinition} />
  </React.StrictMode>
);
