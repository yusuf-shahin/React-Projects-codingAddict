import { useState } from "react"
import person from "./data"
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa"

const App = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = person[index]

  const prevBtn = () => {
    setIndex((currIndex) => {
      let newIndex = currIndex - 1
      if (newIndex < 0) {
        newIndex = person.length - 1
        return newIndex
      }
      return newIndex
    })
  }
  const nextBtn = () => {
    setIndex((currIndex) => {
      let newIndex = currIndex + 1
      if (newIndex > person.length - 1) {
        newIndex = 0
        return newIndex
      }
      return newIndex
    })
  }

  const rendomPerson = () => {
    setIndex(Math.floor(Math.random() * person.length))
  }

  return (
    <main>
      <article className='review'>
        <div className='img-container'>
          <img className='person-img' src={image} alt={name} />
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='btn-container'>
          <FaChevronLeft onClick={prevBtn} className='prev-btn' />
          <FaChevronRight onClick={nextBtn} className='next-btn' />
        </div>
        <button onClick={rendomPerson} className='btn btn-hypster'>
          Rendom Reviwers
        </button>
      </article>
    </main>
  )
}
export default App
