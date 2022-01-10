import React, { useState } from 'react'
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  const [isError, setIsError] = useState(false)

  return (
    <div>
      <h2>short circuit</h2>
      {/* {isError || <h1 style={{ margin: '2rem 0 0 1rem' }}>Loading...</h1>} */}
      {/* {!isError && <h1 style={{ margin: '2rem 0 0 1rem' }}>Loading...</h1>} */}

      {isError ? (
        <h1 style={{ margin: '2rem 0 0 1rem' }}>Error...</h1>
      ) : (
        <h1 style={{ margin: '2rem 0 0 1rem' }}>Loading...</h1>
      )}
      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle error
      </button>
    </div>
  )
}

export default ShortCircuit
