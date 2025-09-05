import React from 'react'
import { useState, useRef } from 'react'

import style from "./feedback.module.css"

import yellowStar from "../../assets/yellowStar.svg"
import approved from '../../assets/approved.svg'
import Arrow from "../../assets/leftArrow.svg"

const feedback = () => {

        const [scrollPosition, setScrollPosition] = useState(0)
        const containerRef = useRef()

        const handlescroll = (scrollAmount) => {
        const newscrollposition = scrollPosition + scrollAmount
        setScrollPosition(newscrollposition)
        containerRef.current.scrollLeft = newscrollposition
    }

    let FeedBacksArray = [
  { userName: "Sophia R.", review: "I love the variety of clothes this store offers! The quality is fantastic, and the sizes fit perfectly. I will definitely be back to shop more!" },
  { userName: "Liam S.", review: "Great experience! The shirts I bought were so comfortable and fit like a dream. Shipping was quick, and the customer service was extremely helpful!" },
  { userName: "Emily W.", review: "Absolutely obsessed with my new jacket! It looks even better in person. The fabric feels premium, and it's perfect for the cooler weather. Highly recommend!" },
  { userName: "James T.", review: "Bought a pair of jeans here, and they are fantastic! Super comfortable and stylish. Definitely a staple for my wardrobe. Looking forward to trying other items." },
  { userName: "Olivia P.", review: "This store is my go-to for trendy and affordable clothes. The dress I bought was so cute, and I received so many compliments. I’m hooked!" },
  { userName: "Isabella M.", review: "Great quality at a good price! I ordered a few tops, and the fabric feels amazing. They fit well and look great on. Will be purchasing more soon." },
  { userName: "Mason G.", review: "The hoodie I purchased from this store is perfect for lounging. It's soft, cozy, and fits great. Can’t wait to get more items for the colder months." },
  { userName: "Ava H.", review: "I bought a sweater here, and it’s the softest material I’ve ever felt. The fit was perfect, and it’s been my go-to piece for chilly evenings." },
  { userName: "Benjamin K.", review: "I was skeptical at first, but these clothes are seriously high quality. The shirts hold up after multiple washes, and the designs are super modern. Highly recommend." },
  { userName: "Chloe L.", review: "I absolutely love the dress I bought from this store. It fits perfectly and looks stunning! The fabric is high quality, and the customer service was so helpful!" },
  { userName: "Ethan J.", review: "The t-shirt I got was exactly what I was looking for. Comfortable, stylish, and great fit. I’ve already recommended this store to all my friends!" },
  { userName: "Charlotte B.", review: "I ordered a pair of pants, and they fit like a glove. The material is sturdy but still breathable. Definitely the best pair I’ve owned. Worth every penny!" },
  { userName: "Jack D.", review: "The quality of the clothing is amazing! The jacket I bought is not only stylish but also really warm. It’s become my favorite winter outerwear." },
  { userName: "Grace F.", review: "I’m so impressed by how well the clothing fits! I ordered a few items, and each one was a perfect match. Definitely my new favorite place to shop." },
  { userName: "Mia C.", review: "These clothes are great for everyday wear. I’ve been looking for basic pieces that are comfy but also stylish, and this store delivers! Totally worth it." },
  { userName: "Lucas N.", review: "I bought a pair of sneakers, and they’re the most comfortable shoes I’ve ever worn. Stylish and durable. Definitely my go-to for casual wear." },
  { userName: "Amelia W.", review: "I ordered a few items for my vacation, and they were perfect for the warm weather. Light, breathable fabrics, and they look amazing. Will order again soon!" },
  { userName: "Leo T.", review: "Incredible quality for the price! The jacket I purchased is warm, soft, and stylish. I get compliments every time I wear it. Highly recommend this store!" },
    ]

  return (  
    <div className={style.container}>
        <div className={style.buttons}>
            <img onClick={() => handlescroll(-420)}  src={Arrow} alt="" />
            <img  onClick={() => handlescroll(420)}  src={Arrow} alt="" />
        </div>
        <div className={style.scrollContainer} ref={containerRef} style={{
            width:"100%",
            overflowX: "scroll",
            scrollBehavior : "smooth"}}>
            <div className={style.feedBacks}>
                {FeedBacksArray.map((feedback) => {
                    return(
                <div className={style.feedBack}>
                    <div className={style.stars}>
                        <img src={yellowStar} alt="" />
                        <img src={yellowStar} alt="" />
                        <img src={yellowStar} alt="" />
                        <img src={yellowStar} alt="" />
                        <img src={yellowStar} alt="" />
                    </div>
                    <div className={style.userName}>
                        <span>{feedback.userName}</span>
                        <img src={approved} alt="" />
                    </div>
                    <p>"{feedback.review}</p>
                </div>
                    )
                })}
            </div>
        </div>
        
    </div>

  )
}

export default feedback
