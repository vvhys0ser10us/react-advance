import React, { useState } from 'react'

const UseStateObject = () => {
  const [person, setPerson] = useState({ name: 'Ken', age: 26, job: 'No job' })

  const findJob = () => {
    setPerson({ ...person, job: 'Developer' })
  }

  return (
    <div>
      <h2>useState object example</h2>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>{person.job}</h2>
      <button className="btn" onClick={findJob}>
        Find a job
      </button>
    </div>
  )
}

export default UseStateObject
