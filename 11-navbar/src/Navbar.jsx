import React, { useRef, useState } from "react"
import { FaBars } from "react-icons/fa"
import { links, social } from "./data.jsx"
import logo from "./logo.svg"

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)

  //* first we create the ref
  const linksRef = useRef(null)
  const linksContainerRef = useRef(null)

  // console.log(linksRef) //# null

  const toggleLinks = () => {
    console.log(linksRef.current) //# links-container div
    // console.log(linksRef.current.getBoundingClientRect()) //# details of div

    setShowLinks(!showLinks)
  }
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='logo' alt='logo' />
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        {/* pass it as ref */}
        <div className='links-container' ref={linksRef}>
          <ul className='links'>
            {links.map((link) => {
              const { text, id, icon, url } = link
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              )
            })}
            {console.log(linksRef)}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
