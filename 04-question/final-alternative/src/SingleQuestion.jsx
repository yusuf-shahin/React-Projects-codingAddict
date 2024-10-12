import React, { useState } from "react"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
const SingleQuestion = ({ id, title, info, isShow, toggleQues }) => {
  const isActive = id === isShow
  return (
    <article className='question'>
      <header>
        <h5>{title}</h5>
        <button
          className='question-btn'
          onClick={() => {
            toggleQues(id)
          }}
        >
          click
        </button>
      </header>
      {isActive && <p>{info}</p>}
    </article>
  )
}

export default SingleQuestion
