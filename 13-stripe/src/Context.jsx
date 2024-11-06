import { createContext, useContext, useState } from "react"

const AppContext = createContext()

export const useGlovalContext = () => useContext(AppContext)

export const AppProvider = (prop) => {
  //! const {children} = props , or props.children
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const [pageId, setPageId] = useState(null)

  const openSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <AppContext.Provider
      value={{ isSidebarOpen, openSidebar, closeSidebar, pageId, setPageId }}
    >
      {prop.children}
    </AppContext.Provider>
  )
}
