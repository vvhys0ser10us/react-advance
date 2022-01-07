import React from 'react'

const ErrorExample = () => {
  let title = 'Random Title'
  const clickHandler = () => {
    title = 'Hello world'
  }

  return (
    <div>
      <h2>useState error example</h2>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={clickHandler}>
        Change Title
      </button>
    </div>
  )
}

export default ErrorExample
