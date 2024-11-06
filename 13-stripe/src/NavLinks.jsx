import React from "react"
import sublinks from "./data"
import { useGlovalContext } from "./Context"

const NavLinks = () => {
  const { pageId, setPageId } = useGlovalContext()
  // console.log(pageId)

  return (
    <div className='nav-links'>
      {sublinks.map(({ pageId, page }) => {
        return (
          <button
            onMouseEnter={() => setPageId(pageId)}
            className='nav-link'
            key={pageId}
          >
            {page}
          </button>
        )
      })}
    </div>
  )
}

export default NavLinks
