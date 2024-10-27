import { useState } from "react"
import Form from "./Form"
import { nanoid } from "nanoid"
import Items from "./Items"

const App = () => {
  const [items, setItems] = useState([])

  const addItems = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    }
    setItems([...items, newItem])
  }

  const removeItem = (itemId) => {
    const removeItem = items.filter((item) => item.id !== itemId)
    setItems(removeItem)
  }

  return (
    <section className='section-center'>
      <Form addItems={addItems} />
      <Items items={items} removeItem={removeItem} />
    </section>
  )
}

export default App
