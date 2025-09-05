import React, { useState } from 'react'
import { useRef } from 'react'

const ScrollTest = () => {
    let items = [
        { id: 1, color: "black"},
        { id: 2, color: "black"},
        { id: 3, color: "black"},
        { id: 4, color: "black"},
        { id: 5, color: "black"},
        { id: 6, color: "black"},
        { id: 7, color: "black"},
        { id: 8, color: "black"},
        { id: 9, color: "black"},
    ]

    const [scroll, setScroll] = useState(0)

    const containerRef = useRef()

    const handlescroll = (scrollAmount) => {
        const newscrollposition = scroll + scrollAmount
        setScroll(newscrollposition)
        containerRef.current.scrollLeft = newscrollposition
    }

  return (
    <div className='containertest'>
        <div 
        >
            <div className="contentBox">
            {items.map((item) => {
                return(
                    <div className='cardtest' style={{backgroundColor : item.color, color:"white"}}>
                        <p>{item.id}</p>
                    </div>
                )
            })}
            </div>
        </div>
        <div className="actionBtns">
            <button onClick={() => handlescroll(-200)} >left</button>
            <button onClick={() => handlescroll(200)} >right</button>
        </div>
      
    </div>
  )
}

export default ScrollTest
