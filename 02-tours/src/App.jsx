import { useEffect, useState } from "react"
import Loading from "./Loading"
import Tours from "./Tours"

const url = "https://www.course-api.com/react-tours-project"

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTour = (id) => {
    const newTour = tours.filter((tour) => {
      return tour.id !== id
    })
    setTours(newTour)
  }

  const fetchLoading = async () => {
    setIsLoading(true)
    try {
      const resp = await fetch(url)
      const data = await resp.json()
      setTours(data)
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchLoading()
  }, [])

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>There is no place</h2>
          <div className='title-underline'></div>
        </div>
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <button type='button' className='btn' onClick={() => fetchLoading()}>
            refreash
          </button>
        </div>
      </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}
export default App
