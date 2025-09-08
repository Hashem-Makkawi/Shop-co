import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StarsIcons from "../Stars/stars";
import PricingLabel from "../Pricing/price";

import style from "./piece.module.css";

const Piece = ({ productInfo }) => {
  const navigate = useNavigate();

  const { id, title, rating, price, discount, discountPercentage, colors } =
    productInfo;

  let [index, setIndex] = useState(0);
  let imagesrc = colors[0].images[index];
  let [isfading, setIsfading] = useState(false);
  let [ishovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval;
    if (ishovered) {
      interval = setInterval(() => {
        setIsfading(true);

        setTimeout(() => {
          setIndex((prevIndex) => (prevIndex + 1) % colors[0].images.length);
          setIsfading(false);
        }, 300);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [ishovered, colors[0].length]);

  return (
    <div
      onClick={() =>
        navigate(`/productDetails/${id}`, {
          state: {
            product: productInfo,
          },
        })
      }
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => {
        setIsHovered(false);
        setIndex(0);
      }}
      className={style.piece}
    >
      <img
        className={`${style.image}  ${isfading ? style.fadeOut : ""}`}
        src={imagesrc}
        alt=""
      />
      <h4 className={style.title}>{title}</h4>
      <StarsIcons rating={rating} />
      <PricingLabel
        price={price}
        discount={discount}
        discountPercentage={discountPercentage}
      />
    </div>
  );
};

export default Piece;
