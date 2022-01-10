import React, { useState, useEffect } from 'react'

const ShowHide = () => {
  const [show, setShow] = useState(true)

  return (
    <div>
      <h2>show/hide</h2>
      <button
        className="btn"
        onClick={() => {
          setShow(!show)
        }}
      >
        Show / Hide
      </button>
      {show && <Item />}
    </div>
  )
}

const Item = () => {
  const [size, setSize] = useState(window.innerWidth)

  const checkSize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', checkSize)
    return () => {
      window.removeEventListener('resize', checkSize)
    }
  })

  return (
    <div>
      <h1>window</h1>
      <h1>{size} PX</h1>
    </div>
  )
}

export default ShowHide
