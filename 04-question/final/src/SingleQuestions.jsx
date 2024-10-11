import React, { useState } from "react"
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai"

const SingleQuestions = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false)
  return (
    <article className='question'>
      <header>
        <h5>{title}</h5>
        <button
          type='button'
          className='question-btn'
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? <AiOutlineMinusCircle /> : <AiOutlinePlusCircle />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  )
}

export default SingleQuestions
