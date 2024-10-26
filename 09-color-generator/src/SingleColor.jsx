import React from "react"

const SingleColor = ({ color, index }) => {
  // console.log(color.hex, index)
  const { hex, weight } = color
  return (
    <section
      className={index > 10 ? "color color-light" : "color"}
      style={{ background: `#${hex}` }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>#{hex}</p>
    </section>
  )
}

export default SingleColor
