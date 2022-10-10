import { useState } from "react";
import "./newComponent.css";

const NewComponent = (props) => {
  const [name, setName] = useState("John Doe");
  return (
    <>
      <h3>Component: {props.nameNew}</h3>

      <input
        type="text"
        onChange={(e) => {
          console.log(e.target.value);
          setName(e.target.value);
        }}
      ></input>
      <h4>Your name: {name}</h4>
    </>
  );
};

export default NewComponent;
