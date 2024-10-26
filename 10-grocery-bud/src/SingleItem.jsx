import React from "react"

const SingleItem = ({ item }) => {
  const { name } = item

  return (
    <div className='single-item'>
      <input type='checkbox' />
      <p>{name}</p>
      <button className='btn remove-btn' type='button'>
        delete
      </button>
    </div>
  )
}

export default SingleItem
