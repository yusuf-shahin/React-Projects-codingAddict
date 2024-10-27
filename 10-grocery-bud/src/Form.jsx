import React, { useState } from "react"

const Form = ({ addItems }) => {
  const [newItemName, setNewItemName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItemName) return
    addItems(newItemName)
    setNewItemName("")
  }
  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery Bud</h4>
      <div className='form-control'>
        <input
          type='text'
          value={newItemName}
          className='form-input'
          onChange={(e) => setNewItemName(e.target.value)}
        />
        <button type='submit' className='btn'>
          add item
        </button>
      </div>
    </form>
  )
}

export default Form
