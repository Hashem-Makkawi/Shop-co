import React from "react";
import { useState } from "react";

import style from "./reviewSection.module.css";

import Reviews from "./ProductReviews/Reviews";
import FAQ from "./ProductFAQ/FAQ";
import Details from "./ProductDetails/Details";

const ReviewSection = () => {

  let [selected, setSelected] = useState(1)
  let content;
  if(selected===0){
    content =<Details/>
  }
  else if(selected===1){
    content = <Reviews />
  }else{
    content = <FAQ />
  }


  return (
    <div className={style.section}>
      <div className={style.container}>
        <h2 className={selected === 0 ? style.selected : ""}
        onClick={() => setSelected(0)}>Product Details</h2>
        <h2 className={selected === 1 ? style.selected : ""}
        onClick={() => setSelected(1)}>Rating & Reviews</h2>
        <h2 className={selected === 2 ? style.selected : ""}
        onClick={() => setSelected(2)}>FAQs</h2>
      </div>
      <hr />
      {content}
    </div>
  );
};

export default ReviewSection;
