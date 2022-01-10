import React, { useState } from 'react'

const UseStateBasics = () => {
  const [state, setTitle] = useState(true)

  const clickHandler = () => {
    setTitle((state) => {
      return !state
    })
  }

  return (
    <div>
      <h2>useState basics</h2>
      <h2>{state ? 'Random Title' : 'Hello World'}</h2>
      <button type="button" className="btn" onClick={clickHandler}>
        Change Title
      </button>
    </div>
  )
}

export default UseStateBasics
