import React from "react"
import sublinks from "./data"
import { useGlovalContext } from "./Context"

const Submenu = () => {
  const { pageId } = useGlovalContext()
  const currentPage = sublinks.find((item) => item.pageId === pageId)
  //! find method return the index .
  // console.log(currentPage)

  return (
    <div className='submenu'>
      <h5></h5>
    </div>
  )
}

export default Submenu
