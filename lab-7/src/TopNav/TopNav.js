import { ItemContext } from "../App";
import React, { useContext } from "react";

const TopNav = () => {
  const { totalValue, setTotalValue } = useContext(ItemContext);
  return (
    <>
      <h3
        style={{
          position: "absolute",
          right: "10px",
          top: "5px",
          color: "red",
        }}
      >
        Total: ${totalValue}
      </h3>
    </>
  );
};

export default TopNav;
