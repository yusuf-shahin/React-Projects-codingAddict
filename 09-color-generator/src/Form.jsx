import React, { useState } from "react"

const Form = ({ addColor }) => {
  const [color, setColor] = useState("#00a0b0")
  const handleSubmit = (e) => {
    e.preventDefault()
    addColor(color)
  }

  return (
    <section className='container'>
      <h4>Color Generator</h4>
      <form className='color-form' onSubmit={handleSubmit}>
        {/* //@ input type is color */}
        <input
          type='color'
          value={color}
          //! Bydefault value is color
          onChange={(e) => setColor(e.target.value)}
        />
        {/* //@ the input type is text */}
        <input
          type='text'
          placeholder={color.slice(1)}
          //! Bydefault value is color
          onChange={(e) => setColor(`#${e.target.value}`)}
        />
        <button
          type='submit'
          className='btn'
          style={{ backgroundColor: color }}
        >
          submit
        </button>
      </form>
    </section>
  )
}

export default Form
