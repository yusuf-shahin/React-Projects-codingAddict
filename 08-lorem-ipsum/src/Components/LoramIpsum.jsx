import React, { useState } from "react"
import data from "../data"
import { nanoid } from "nanoid"
const LoramIpsum = () => {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    let amount = parseInt(count)
    // console.log(amount)
    setText(() => {
      const text = data.slice(0, amount)
      return text
    })
  }

  return (
    <section className='section-center'>
      <h4>Yushah Ipsum Text</h4>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraph</label>
        <input
          type='number'
          name='amount'
          id='amount'
          min='1'
          step='1'
          max='8'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type='submit' className='btn'>
          submit
        </button>
      </form>
      <article className='lorem-text'>
        {text.map((ele) => {
          return <p key={nanoid()}>{ele}</p>
        })}
      </article>
    </section>
  )
}

export default LoramIpsum
