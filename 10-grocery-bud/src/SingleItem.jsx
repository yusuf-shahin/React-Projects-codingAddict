import React, { useState } from "react"

const SingleItem = ({ item, removeItem }) => {
  const { name, completed, id } = item
  const [isChecked, setIsChecked] = useState(completed)

  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: isChecked && "line-through",
        }}
      >
        {name}
      </p>
      <button
        onClick={() => removeItem(id)}
        className='btn remove-btn'
        type='button'
      >
        delete
      </button>
    </div>
  )
}

export default SingleItem
