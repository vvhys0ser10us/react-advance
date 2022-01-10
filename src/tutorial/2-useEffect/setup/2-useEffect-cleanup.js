import React, { useState, useEffect } from 'react'

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [value, setValue] = useState(window.innerWidth)

  const checkSize = () => {
    setValue(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', checkSize)

    return () => {
      window.removeEventListener('resize', checkSize)
    }
  })

  return (
    <div>
      <h2>useEffect cleanup</h2>
      <h1>Window</h1>
      <h1>{value} PX</h1>
    </div>
  )
}

export default UseEffectCleanup
