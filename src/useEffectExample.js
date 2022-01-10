import React from 'react'
import UseEffectBasics from './tutorial/2-useEffect/setup/1-useEffect-basics'
import UseEffectCleanup from './tutorial/2-useEffect/setup/2-useEffect-cleanup'
import UseEffectFetchData from './tutorial/2-useEffect/setup/3-useEffect-fetch-data'

function UseEffectExample() {
  return (
    <div className="container">
      <UseEffectBasics></UseEffectBasics>
      <br />
      <hr />
      <br />
      <UseEffectCleanup></UseEffectCleanup>
      <br />
      <hr />
      <br />
      <UseEffectFetchData></UseEffectFetchData>
      <br />
      <hr />
      <br />
    </div>
  )
}

export default UseEffectExample
