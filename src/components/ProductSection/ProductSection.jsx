import style from "./ProductSection.module.css";
import Images from "./Images/Images";
import ColorSelecting from "./ColorSelecting/ColorSelecting";
import { useState, useContext } from "react";
import Stars from "../Stars/Stars";
import Pricing from "../Pricing/price";
import SizeSelecting from "./SizeSelecting/sizeSelecting";
import QuantitySelecting from "./QuantitySelecting/QuantitySelecting";

const ProductSection = ({ product }) => {
  const [colorSelected, setColorSelected] = useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className={style.section}>
      <Images images={product.colors[colorSelected].images} />
      <div className={style.Details}>
        <h1>{product.title}</h1>
        <Stars size="large" rating={product.rating} />
        <Pricing
          size="large"
          price={product.price}
          discount={product.discount}
          discountPercentage={product.discountPercentage}
        />
        <p>{product.description}</p>
        <hr />
        {product.colors.length > 1 && (
          <ColorSelecting setColor={setColorSelected} Colors={product.colors} />
        )}
        <SizeSelecting />
        <hr />
        <QuantitySelecting
          product={product}
          quantity={quantity}
          setQuantity={setQuantity}
        />
      </div>
    </div>
  );
};

export default ProductSection;
