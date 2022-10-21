import React, { useContext } from "react";
import { ItemContext } from "../App";
import { AiFillDelete } from "react-icons/ai";
const CheckoutCart = () => {
  const { checkoutItems, setCheckoutItems, totalValue, setTotalValue } =
    useContext(ItemContext);
  return (
    <>
      <div style={{ position: "absolute", right: "10px", top: "50px" }}>
        <h3>Checkout</h3>
        {checkoutItems.length == 0 ? (
          <h4>No items in cart</h4>
        ) : (
          checkoutItems.map((item) => {
            return (
              <div id={item.id} className="flex" style={{ margin: "20px" }}>
                <img
                  id={item.id}
                  src={item.img}
                  height={"30px"}
                  width={"30px"}
                />
                <h3>{item.name}</h3>
                <button
                  onClick={() => {
                    console.log({ item });
                    let updatedCheckoutItems = [...checkoutItems];
                    console.log({ checkoutItems });
                    updatedCheckoutItems = updatedCheckoutItems.filter((v) => {
                      return v.id !== item.id;
                    });
                    console.log({ updatedCheckoutItems });
                    setCheckoutItems(updatedCheckoutItems);
                    setTotalValue(parseInt(totalValue - item.price));
                  }}
                >
                  <AiFillDelete />
                </button>
                <h4>Price: {item.price}</h4>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default CheckoutCart;
