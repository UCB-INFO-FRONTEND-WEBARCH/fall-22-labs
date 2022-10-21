import React, { useState, useEffect, useContext, createContext } from "react";
import "./App.css";
import TopNav from "./TopNav/TopNav";
import MainBody from "./MainBody/MainBody";
import CheckoutCart from "./CheckoutCart/CheckoutCart";

const jsonItems = require("./items.json");

export const ItemContext = createContext();

function App() {
  const [items, setItems] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const [checkoutItems, setCheckoutItems] = useState([]);

  useEffect(() => {
    setItems([...jsonItems]);
  }, []);

  return (
    <>
      <ItemContext.Provider
        value={{
          items,
          setItems,
          totalValue,
          setTotalValue,
          checkoutItems,
          setCheckoutItems,
        }}
      >
        <h1>Ugly Amazon</h1>
        <div>
          <TopNav />
        </div>
        <div>
          <MainBody />
        </div>
        <CheckoutCart />
      </ItemContext.Provider>
    </>
  );
}

export default App;
