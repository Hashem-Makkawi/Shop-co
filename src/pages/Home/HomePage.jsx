import style from "./Home.module.css"
import Benifit from "../../components/homeBenifit"
import Branding from "../../components/Brands/brands"
import ClothesSection from '../../components/ClothesSection/clothesSection'
import CategoriesSection from "../../components/CategorySection/category"
import FeedBack from '../../components/Feedbacks/feedback'

import bigStarIcon from "../../assets/bigStar.svg"
import Line from "../../assets/homeVerticalLine.svg"
import Url1 from "../../assets/products/product1.svg"
import Url2 from "../../assets/products/product2.svg"
import Url3 from "../../assets/products/product3.svg"
import Url4 from "../../assets/products/product4.svg"
import Url5 from "../../assets/products/product5.svg"
import Url6 from "../../assets/products/product6.svg"
import Url7 from "../../assets/products/product7.svg"
import Url8 from "../../assets/products/product8.svg"
import smallStarIcon from "../../assets/smallStar.svg"
import homeBackgroundImage from "../../assets/homeBackground.svg"



const HomePage = () => {

  let NewArrivals = [
    {
      url: Url1,
      title: "T-shirt with Tape Details",
      rating: 4.5,
      price: 120,
      discount: false
    },
    {
      url: Url2,
      title: "Skinny Fit Jeans",
      rating: 3.5,
      price: 260,
      discount: true,
      discountPercentage: 20
    },
    {
      url: Url3,
      title: "Checkered Shirt",
      rating: 4.5,
      price: 180,
      discount: false
    },
    {
      url: Url4,
      title: "Sleeve Striped T-shirt",
      rating: 4.5,
      price: 160,
      discount: true,
      discountPercentage: 30
    }
  ]

  let TopSelling = [
    {
      url: Url5,
      title: "Vertical Striped Shirt",
      rating: 5,
      price: 232,
      discount: true,
      discountPercentage: 20
    },
    {
      url: Url6,
      title: "Courage Graphic T-shirt",
      rating: 4,
      price: 145,
      discount: false
    },
    {
      url: Url7,
      title: "Loose Fit Bermunda Shorts",
      rating: 3,
      price: 80,
      discount: false
    },
    {
      url: Url8,
      title: "Faded Skinny Jeans",
      rating: 4.5,
      price: 210,
    }
  ]

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
