import React from 'react'
import { data } from '../../../data'

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data)

  const clickHandler = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }

  return (
    <div>
      <h2>useState array example</h2>
      {people.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => clickHandler(id)}>Delete</button>
          </div>
        )
      })}
      <button className="btn" onClick={() => setPeople(data)}>
        Restore
      </button>

      <button className="btn" onClick={() => setPeople([])}>
        Clear
      </button>
    </div>
  )
}

export default UseStateArray
