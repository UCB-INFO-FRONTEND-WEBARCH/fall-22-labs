import { useState } from "react";
import "./newComponent.css";

const NewComponent = (props) => {
  let name = "John Doe";
  return (
    <>
      <h3>Component Name: {props.definition.name}</h3>
      <h4>Type: {props.definition.value}</h4>
      <input
        type="text"
        onChange={(e) => {
          name = e.target.value;
          console.log(name);
        }}
      ></input>
      <br />
      Welcome: {name}
    </>
  );
};

export default NewComponent;
