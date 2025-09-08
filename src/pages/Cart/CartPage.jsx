import { useContext, useState, Fragment } from "react";
import { CartContext } from "../../pages/Cart/cartProvider";


import style from "./CartPage.module.css";

import SadFace from "../../assets/sadFace.svg";
import Delete from "../../assets/delete.svg";
import plus from "../../assets/plus.svg";
import Minus from "../../assets/minus.svg";
import Arrow from "../../assets/arrowRight.svg";
import Ticket from "../../assets/ticket.svg";

const CartPage = () => {
  
  const { removeFromCart, totalItems } = useContext(CartContext);

  // Load cart from localStorage into React state
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  // Calculate total whenever cart changes
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Update quantity
  const updateQuantity = (id, action) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity:
              action === "increment"
                ? item.quantity + 1
                : Math.max(1, item.quantity - 1),
          };
        }
        return item;
      });

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  // Remove item
  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    removeFromCart(id);
  };

  return (
    <div className={style.section}>
      <hr className={style.hr}/>
      <h1 className={style.title}>Your Cart</h1>
      <div className={style.container}>
      {cart.length === 0 ? (
        <h2 className={style.empty}>
          <img src={SadFace} alt="" />
          Cart is empty
        </h2>
      ) : (
        <div className={style.itemsSection}>
          <div className={style.itemList}>
            {cart.map((item, index) => (
              <Fragment key={item.id}>
                <div className={style.item}>
                  <div className={style.leftPart}>
                    <img
                      className={style.itemImage}
                      src={item.colors[0].images[0]}
                      alt=""
                    />
                    <div className={style.itemInfo}>
                      <span className={style.itemTitle}>{item.title}</span>
                      <span>${item.price * item.quantity}</span>
                    </div>
                  </div>
                  <div className={style.itemButtons}>
                    <img
                      className={style.delete}
                      src={Delete}
                      alt="delete"
                      onClick={() => handleRemove(item.id)}
                    />
                    <div className={style.quantityBtns}>
                      <div className={style.button}  onClick={() => updateQuantity(item.id, "decrement")}>
                        <img
                          src={Minus}
                          alt="decrease quantity"
                         
                        />
                      </div>
                      <span>{item.quantity}</span>
                      <div className={style.button} onClick={() => updateQuantity(item.id, "increment")}
                        >
                        <img 
                          src={plus}
                          alt="increase quantity"
                        />  
                      </div>
                    </div>
                  </div>
                </div>
                {index < cart.length - 1 && <hr className={style.line} />}
              </Fragment>
            ))}
          </div>
          <div className={style.checkOut}>
            <span className={style.totalTitle}>Order Summary</span>
            <hr className={style.checkOutLine}/>
            <div className={style.totalContainer}>
              <span>Total</span>
              <span>${total}</span>
            </div>
            <div className={style.buttons}>
              <div className={style.form}>
                <input type="text" placeholder="Add promo code" />
                <img src={Ticket} alt="" />
                <button>Apply</button>
              </div>
              <button className={style.checkOutBtn}>
                Go to Checkout
                <img src={Arrow} alt="" />
              </button>
            </div>
          </div>
        </div>
      )}</div>
    </div>
  );
};

export default CartPage;
