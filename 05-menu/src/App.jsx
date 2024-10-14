import { useState } from "react"
import Menu from "./Menu"
import Title from "./Title"
import menu from "./data"
import Categories from "./Categories"

const menuCategories = menu.map((item) => item.category)
// console.log(menyCategory) //# array

//* use spread operator to copy the value of Set
const uniqueCategories = ["all", ...new Set(menuCategories)]

const App = () => {
  const [categories, setCategories] = useState(uniqueCategories)

  return (
    <main>
      <section className='menu'>
        <Title title='our menu' />
        <Categories categories={categories} />
        <Menu menu={menu} />
      </section>
    </main>
  )
}
export default App
