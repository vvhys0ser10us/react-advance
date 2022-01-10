import React, { useState, useEffect } from 'react'
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (value) {
      document.title = `New Messages(${value})`
    }
  }, [value])
  return (
    <div>
      <h2>useEffect Basics</h2>
      <h1 style={{ margin: '2rem 0 0 1rem' }}>{value}</h1>
      <button
        className="btn"
        onClick={() => {
          setValue(value + 1)
        }}
      >
        Click ME
      </button>
    </div>
  )
}

export default UseEffectBasics
