import React from "react"
import sublinks from "./data"
import { FaTimes } from "react-icons/fa"
import { useGlovalContext } from "./Context"

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlovalContext()
  // console.log(isSidebarOpen)

  return (
    <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className='sidebar-container'>
        <button onClick={closeSidebar} className='close-btn'>
          <FaTimes />
        </button>
        <div className='sidebar-links'>
          {sublinks.map(({ links, page, pageId }) => {
            return (
              <article key={pageId}>
                <h4>{page}</h4>
                <div className='sidebar-sublinks'>
                  {links.map(({ url, icon, label, id }) => {
                    return (
                      <a href={url} key={id}>
                        {icon}
                        {label}
                      </a>
                    )
                  })}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
