import React from "react"
import { useGlovalContext } from "./context"
import { FaBars } from "react-icons/fa"

const Home = () => {
  const { openSidebar, openModal } = useGlovalContext()
  // pass two function
  return (
    <main>
      <button onClick={openSidebar} className='sidebar-toggle'>
        <FaBars />
      </button>
      <button onClick={openModal} className='btn'>
        show modal
      </button>
    </main>
  )
}

export default Home
