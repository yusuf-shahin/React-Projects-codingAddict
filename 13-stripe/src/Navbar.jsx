import React from "react"
import { FaBars } from "react-icons/fa"
import { useGlovalContext } from "./Context"
import NavLinks from "./NavLinks"

const Navbar = () => {
  const { openSidebar } = useGlovalContext()
  // console.log(openSidebar)

  return (
    <nav>
      <div className='nav-center'>
        <h3 className='logo'>
          <span>s</span>trapi
        </h3>
        <button className='toggle-btn' onClick={openSidebar}>
          <FaBars />
        </button>
        {/* nav links later */}
        <NavLinks />
      </div>
    </nav>
  )
}

export default Navbar
