import { useEffect, useState } from "react"
import Loading from "./Loading"
import Tours from "./Tours"

const url = "https://www.course-api.com/react-tours-project"

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState([])

  useEffect(() => {
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
    fetchLoading()
  }, [])

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} />
    </main>
  )
}
export default App
