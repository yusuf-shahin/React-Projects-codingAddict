import { useState } from "react"
import data from "./data.js"
import List from "./List.jsx"

const App = () => {
  const [people, setPeople] = useState(data)

  return (
    <main>
      <div className='container'>
        <h3>{people.length} peoples, Birthday today </h3>
        {/* render the list component */}
        <List persons={people} />
        <button
          type='button'
          className='btn btn-block'
          onClick={() => setPeople([])}
        >
          clear all
        </button>
      </div>
    </main>
  )
}
export default App
