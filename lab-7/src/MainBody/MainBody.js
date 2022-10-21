import React, { useContext } from "react";
import { ItemContext } from "../App";

const MainBody = () => {
  const { items, checkoutItems, setCheckoutItems, totalValue, setTotalValue } =
    useContext(ItemContext);

  return (
    <>
      {items.length == 0 ? (
        <h2>"No related items found."</h2>
      ) : (
        items.map((item) => {
          return (
            <div id={item.id} className="flex" style={{ margin: "20px" }}>
              <img
                id={item.id}
                src={item.img}
                height={"100px"}
                width={"100px"}
              />
              <h2>{item.name}</h2>
              <h3>Price: {item.price}</h3>
              <button
                style={{ margin: "10px" }}
                onClick={() => {
                  let updatedCheckoutItems = [...checkoutItems];
                  updatedCheckoutItems.push(item);
                  setCheckoutItems(updatedCheckoutItems);
                  setTotalValue(parseInt(totalValue + item.price));
                }}
              >
                Add to cart
              </button>
            </div>
          );
        })
      )}
    </>
  );
};

export default MainBody;
