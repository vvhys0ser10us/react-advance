import React from 'react'
import Error from './tutorial/1-useState/setup/1-error-example'
import Basics from './tutorial/1-useState/setup/2-useState-basics'
import Array from './tutorial/1-useState/setup/3-useState-array'
import Object from './tutorial/1-useState/setup/4-useState-object'
import Counter from './tutorial/1-useState/setup/5-useState-counter'

function UseStateExample() {
  return (
    <div className="container">
      <Error></Error>
      <br />
      <hr />
      <br />
      <Basics></Basics>
      <br />
      <hr />
      <br />
      <Array></Array>
      <br />
      <hr />
      <br />
      <Object></Object>
      <br />
      <hr />
      <br />
      <Counter></Counter>
      <br />
      <hr />
      <br />
    </div>
  )
}

export default UseStateExample
