import React from "react"

const Person = ({ image, name, age }) => {
  return (
    <div>
      <article className='person'>
        <img src={image} alt={name} className='img' />
        <div>
          <h4>{name}</h4>
          <p>{age}</p>
        </div>
      </article>
    </div>
  )
}

export default Person
