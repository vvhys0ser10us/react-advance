import React, { useState } from 'react'

const UseStateCounter = () => {
  const [value, setValue] = useState(0)
  return (
    <div>
      <h2>useState counter example</h2>
      <h1 style={{ margin: '2rem 0 0 1rem' }}>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        +
      </button>
      <button className="btn" onClick={() => setValue(0)}>
        Reset
      </button>
      <button className="btn" onClick={() => setValue(value - 1)}>
        -
      </button>
    </div>
  )
}

export default UseStateCounter
