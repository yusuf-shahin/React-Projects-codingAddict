import { createContext, useContext, useState } from "react"

const AppContext = createContext()

export const useGlovalContext = () => useContext(AppContext)

export const AppProvider = (prop) => {
  //! const {children} = props , or props.children
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const openSidebar = () => {
    setIsSidebarOpen(true)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  return (
    <AppContext.Provider value={{ isSidebarOpen, openSidebar, closeSidebar }}>
      {prop.children}
    </AppContext.Provider>
  )
}
