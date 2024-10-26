import { useState } from "react"
import ColorList from "./ColorList"
import Form from "./Form"
import Values from "values.js"
import { ToastContainer, toast } from "react-toastify"

const App = () => {
  const [colors, setColors] = useState(new Values("#34ffac").all(1))
  //? here colors === array of object
  // console.log(colors[3].hex)
  // toast.success("awesome")
  // toast.error("error message")
  const addColor = (color) => {
    try {
      const newColor = new Values(color).all(1)
      setColors(newColor)
    } catch (error) {
      toast.error(error.message)
    }
  }
  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position='top-center' />
    </main>
  )
}
export default App
