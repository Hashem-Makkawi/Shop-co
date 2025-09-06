import style from "./Home.module.css"
import { useState, useEffect, use} from "react"
import Benifit from "../../components/homeBenifit"
import Branding from "../../components/Brands/brands"
import ClothesSection from '../../components/ClothesSection/clothesSection'
import CategoriesSection from "../../components/CategorySection/category"
import FeedBack from '../../components/Feedbacks/feedback'

import bigStarIcon from "../../assets/bigStar.svg"
import Line from "../../assets/homeVerticalLine.svg"

import smallStarIcon from "../../assets/smallStar.svg"
import homeBackgroundImage from "../../assets/homeBackground.svg"



const HomePage = () => {

  let [NewArrivals, setNewArrivals] = useState([])

  useEffect(() => {
    fetch("/NewArrivals.json")
      .then(res => res.json())
      .then(data => setNewArrivals(data))
      .catch(err => console.log(err))
  }, [])

  let [TopSelling, setTopselling] = useState([])

  useEffect(() => {
    fetch("/TopSelling.json")
      .then(res => res.json())
      .then(data => setTopselling(data))
      .catch(err => console.log(err))
  }, [])
  

  return (
    <>
      <section className={style.homeSection}>
        <div className={style.welcome}>
          <h1>
            FIND CLOTHES THAT MATCH YOUR STYLE
          </h1>
          <p>
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </p>
          <button>Shop Now</button>
        </div>
        <div className={style.benifits}>
          <Benifit innerNumber="200+" innerText="International Brands" />
          <img src={Line} alt="" />
          <Benifit innerNumber="2,000+" innerText="High-Quality Products" />
          <img src={Line} alt="" />
          <Benifit innerNumber="30,000+" innerText="Happy Customers" />
        </div>
        <img className={style.bigStar} src={bigStarIcon} alt="" />
        <img className={style.smallStar} src={smallStarIcon} alt="" />
        <img className={style.homeBack} src={homeBackgroundImage} alt="" />
      </section>
      <Branding />
      <ClothesSection Heading="NEW ARRIVALS" array={NewArrivals} />
      <hr className={style.line} />
      <ClothesSection Heading="TOP SELLING" array={TopSelling} />
      <CategoriesSection />
      <section className={style.feedBackSection}>
        <h2 className={style.h2}>OUR HAPPY CUSTOMERS</h2>
        <FeedBack />
      </section>
    </>
  )
}

export default HomePage
