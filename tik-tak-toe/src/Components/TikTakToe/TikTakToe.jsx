import React, { useState } from "react"
import "./TikTakToe.css"

import circleIcon from "../assets/circle.png"
import crossIcon from "../assets/cross.png"

const TikTakToe = () => {
  const blocks = ["", "", "", "", "", "", "", "", ""]
  const [data, setData] = useState(blocks)
  const [count, setCount] = useState(0)
  const [lock, setLock] = useState(false)

  // const [cross, setCross] = useState(crossIcon)
  // const [circle, setCircle] = useState(circleIcon)

  const boxes = document.querySelectorAll(".boxes")

  const toggle = (e, num) => {
    if (lock) {
      // if lock gonna true then return 0
      return
    }
    if (data[num] !== "") return
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src="${crossIcon}"/>`
      data[num] = e.target.innerHTML
      setData(data)
      setCount(count + 1)
    } else {
      e.target.innerHTML = `<img src="${circleIcon}"/>`
      data[num] = e.target.innerHTML
      setData(data)
      setCount(count + 1)
    }
    console.log(data)
    // console.log(blocks)
  }

  // toggle()
  // console.log(toggle)

  return (
    <div className='container'>
      <h1 className='title'>
        Tik Tak Toe In <span>React</span>
      </h1>
      <div className='board'>
        <div className='row1'>
          <div className='boxes' onClick={(e) => toggle(e, 0)}></div>
          <div className='boxes' onClick={(e) => toggle(e, 1)}></div>
          <div className='boxes' onClick={(e) => toggle(e, 2)}></div>
        </div>
        <div className='row2'>
          <div className='boxes' onClick={(e) => toggle(e, 3)}></div>
          <div className='boxes' onClick={(e) => toggle(e, 4)}></div>
          <div className='boxes' onClick={(e) => toggle(e, 5)}></div>
        </div>
        <div className='row3'>
          <div className='boxes' onClick={(e) => toggle(e, 6)}></div>
          <div className='boxes' onClick={(e) => toggle(e, 7)}></div>
          <div className='boxes' onClick={(e) => toggle(e, 8)}></div>
        </div>
      </div>
      <button
        onClick={() => {
          setData(blocks)
          boxes.forEach((box) => {
            box.innerHTML = ""
          })
        }}
        className='reset'
      >
        Reset
      </button>
    </div>
  )
}

export default TikTakToe
