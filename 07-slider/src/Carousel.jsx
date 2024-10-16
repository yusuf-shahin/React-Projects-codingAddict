import React, { useState } from "react"
import { shortList, list, longList } from "./data"
import { FaQuoteRight } from "react-icons/fa6"
import { FaChevronRight, FaChevronLeft } from "react-icons/fa"

const Carousel = () => {
  const [people, setPeople] = useState(list)
  const [currentPerson, setCurrentPerson] = useState(1)
  const prevSlide = () => {
    setCurrentPerson((e) => {
      let newElement = e - 1
      if (newElement < 0) {
        newElement = people.length - 1
      }
      return newElement
    })
  }
  const nextSlide = () => {
    setCurrentPerson((e) => {
      let newElement = e + 1
      if (newElement >= people.length) {
        newElement = 0
      }
      return newElement
    })
  }

  return (
    <section className='slider-container'>
      {people.map((person, personIndex) => {
        const { id, image, name, title, quote } = person
        return (
          <article
            className='slide'
            style={{
              transform: `translateX(${100 * (personIndex - currentPerson)}%)`,
            }}
            key={id}
          >
            <img src={image} alt={name} className='person-img' />
            <h5 className='name'>{name}</h5>
            <p className='title'>{title}</p>
            <p className='text'>{quote}</p>
            <FaQuoteRight className='icon' />
          </article>
        )
      })}
      <button type='button' className='prev' onClick={prevSlide}>
        <FaChevronLeft />
      </button>
      <button type='button' className='next' onClick={nextSlide}>
        <FaChevronRight />
      </button>
    </section>
  )
}

export default Carousel
