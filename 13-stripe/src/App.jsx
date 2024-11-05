import { useGlovalContext } from "./Context"
import Hero from "./Hero"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Submenu from "./Submenu"

const App = () => {
  const { isSidebarOpen } = useGlovalContext()

  // console.log(isSidebarOpen)
  return (
    <div>
      <Navbar />
      <Hero />
      <Sidebar />
      <Submenu />
    </div>
  )
}
export default App
