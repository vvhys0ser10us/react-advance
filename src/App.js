import React from 'react'
import Setup1 from './tutorial/1-useState/setup/1-error-example'
import Setup2 from './tutorial/1-useState/setup/2-useState-basics'
import Setup3 from './tutorial/1-useState/setup/3-useState-array'
import Setup4 from './tutorial/1-useState/setup/4-useState-object'
import Setup5 from './tutorial/1-useState/setup/5-useState-counter'

function App() {
  return (
    <div className="container">
      <Setup1></Setup1>
      <br />
      <hr />
      <br />
      <Setup2></Setup2>
      <br />
      <hr />
      <br />
      <Setup3></Setup3>
      <br />
      <hr />
      <br />
      <Setup4></Setup4>
      <br />
      <hr />
      <br />
      <Setup5></Setup5>
      <br />
      <hr />
      <br />
    </div>
  )
}

export default App
