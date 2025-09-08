import React from "react";
import style from "./QuantitySelecting.module.css";
import { CartContext } from "../../../pages/Cart/cartProvider";
import { useContext } from "react";

import Plus from "../../../assets/plus.svg";
import Minus from "../../../assets/minus.svg";

const QuantitySelecting = ({ product, setQuantity, quantity }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className={style.container}>
      <div className={style.buttons}>
        <div  onClick={() => {
            if (quantity > 1) {
              setQuantity((quantity) => quantity - 1);
            }
          }} className={style.button}>
        <img src={Minus}
         
        />
        </div>
        <span>{quantity}</span>
        <div className={style.button}  onClick={() => setQuantity((quantity) => quantity + 1)}><img src={Plus}/></div>
      </div>
      <button
        onClick={() => {
          addToCart(product, quantity);
        }}
        className={style.addToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default QuantitySelecting;
