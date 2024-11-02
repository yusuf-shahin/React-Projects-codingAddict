import { createContext, useContext, useState } from "react"

const AppContent = createContext()

export const useGlovalContext = () => useContext(AppContent)

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openSidebar = () => setIsSidebarOpen(true)
  const closeSidebar = () => setIsSidebarOpen(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <AppContent.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        openSidebar,
        openModal,
        closeSidebar,
        closeModal,
      }}
    >
      {children}
      {/* we get every component as children */}
    </AppContent.Provider>
  )
}

export default AppProvider
