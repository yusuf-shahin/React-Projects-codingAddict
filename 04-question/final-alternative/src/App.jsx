import { useState } from "react"
import data from "./data"
import Questions from "./Questions"

function App() {
  const [questions, setQuestions] = useState(data)
  const [isShow, setIsShow] = useState(null)
  const toggleQues = (id) => {
    isShow === id ? setIsShow(null) : setIsShow(id)
  }
  return (
    <main>
      <Questions
        questions={questions}
        isShow={isShow}
        toggleQues={toggleQues}
      />
    </main>
  )
}

export default App
