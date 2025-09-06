import React, { use } from 'react'
import { useParams , useNavigate} from 'react-router-dom'
import Products1 from "../../../public/NewArrivals.json"
import Products2 from "../../../public/TopSelling.json"


import style from "./productDetailPage.module.css"

const ProductDetailsPage = () => {

  const navigate = useNavigate()

  const {id} = useParams()
  let product = Products1.find(item => item.id === parseInt(id)) || Products2.find(item => item.id === parseInt(id))

  if(!product){
    return <div className={style.productNotFound}>
      <h1>Product Not Found</h1>
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  }
  

  return (
    <div>
      <h1>THis is product details page</h1>
    </div>
  )
}

export default ProductDetailsPage
