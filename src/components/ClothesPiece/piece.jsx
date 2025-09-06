import {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom"
import StarsIcons from "../Stars/stars"
import PricingLabel from "../Pricing/price"

import style from "./piece.module.css"


const Piece = ({id, images, title, rating, price, discount, discountPercentage}) => {

  const navigate = useNavigate()

  let [index, setIndex] = useState(0)
  let [ishovered, setIsHovered] = useState(false)
  let [isfading, setIsfading] = useState(false)
  let imagesrc = images[index]
  

    useEffect(() => {
      let interval;
      if(ishovered){
      interval = setInterval(() => {
        setIsfading(true)

        setTimeout(() => {
          setIndex(prevIndex => (prevIndex + 1) % images.length) 
          setIsfading(false)
        }, 500) // Duration of fade-out effect
      },2000)
    }

      return () => clearInterval(interval)
    }, [ishovered, images.length])
  



  return (
    
        <div onClick={() => navigate(`/productDetails/${id}`)} onMouseOver={() => setIsHovered(true)} onMouseOut={() => {setIsHovered(false) 
          setIndex(0)}
        } className={style.piece}>
        <img className={`${style.image}  ${isfading ? style.fadeOut : ""}`} src={imagesrc} alt="" />
        <h4 className={style.title}>{title}</h4>
        <StarsIcons rating = {rating} />
        <PricingLabel price = {price} discount={discount} discountPercentage={discountPercentage}/>
        </div>
    
  )
}

export default Piece
