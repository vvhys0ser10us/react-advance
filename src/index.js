import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import UseStateExample from './useStateExample'
import UseEffectExample from './useEffectExample'

ReactDOM.render(
  <React.StrictMode>
    {/* <UseStateExample /> */}
    <UseEffectExample />
  </React.StrictMode>,
  document.getElementById('root')
)
