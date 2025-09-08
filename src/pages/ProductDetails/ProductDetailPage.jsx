import React, { use } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import ProductSection from "../../components/ProductSection/ProductSection";
import PageTitle from "../../components/PagesTitle/pagetitle";

import style from "./productDetailPage.module.css";

const ProductDetailsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state;

  console.log("state", state);

  const product = location.state?.product;

  console.log("aboos idik zbate ---", state);

  if (!product) {
    return (
      <div className={style.productNotFound}>
        <h1>Product Not Found</h1>
        <button onClick={() => navigate("/")}>Home</button>
      </div>
    );
  }

  return (
    <div>
      <PageTitle title="Product Details" />
      <ProductSection product={product} />
    </div>
  );
};

export default ProductDetailsPage;
