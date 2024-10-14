import React from "react"

const Categories = ({ categories }) => {
  const filterItems = (categoryItem) => {
    console.log(categoryItem)
  }
  return (
    <div className='btn-container'>
      {categories.map((category) => {
        return (
          <button
            type='button'
            className='btn'
            key={category}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default Categories
