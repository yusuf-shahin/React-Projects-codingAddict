## Figma URL

[Birthday Buddy](https://www.figma.com/file/e2vsLe9DMnXZIygNHkwGL1/Birthday-buddy?node-id=0%3A1&t=AGNWdO5QQGOoNCfD-1)

#### Import Data

In App.jsx, import the data (from data.js) to be rendered as an array of objects. Each object should represent a person and contain properties such as name, age, and image URL.

**App.jsx**

```jsx
import { useState } from "react"
import data from "./data.js"
import List from "./List.jsx"

const App = () => {
  const [people, setPeople] = useState(data)

  return (
    <main>
      <div className='container'>
        <h3>{people.length} peoples, Birthday today </h3>
        {/* render the list component */}
        <List persons={people} />
        <button
          type='button'
          className='btn btn-block'
          onClick={() => setPeople([])}
        >
          clear all
        </button>
      </div>
    </main>
  )
}
export default App
```

**List.jsx**

```jsx
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
```

**Person.jsx**

```jsx
import React from "react"

const Person = ({ image, name, age }) => {
  return (
    <div>
      <article className='person'>
        <img src={image} alt={name} className='img' />
        <div>
          <h4>{name}</h4>
          <p>{age}</p>
        </div>
      </article>
    </div>
  )
}

export default Person
```

#### Clear List

In App.jsx, add a button to clear the list, and set up the functionality by defining a function that resets the state variable to an empty array.

Overall, the flow of the application should look something like this:

- Import the data you want to render in App.jsx.
- Set up the data as a state variable using useState.
- Use the map method to iterate over the data array and render a Person component for each person.
- Each Person component should render an image with a style prop to control the width, the person's name, and the person's age.
- Create a List component that holds the rendered items.
- Create a button with functionality to clear the list.
- Display the number of items in the list using the length property of the state variable. This can be rendered using plain text or added to a message or heading element.
