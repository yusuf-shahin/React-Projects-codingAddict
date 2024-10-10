import React from "react"
import Person from "./Person"

const List = (props) => {
  const { persons } = props
  return (
    <section>
      {persons.map((person) => {
        return <Person key={person.id} {...person} />
      })}
    </section>
  )
}

export default List
