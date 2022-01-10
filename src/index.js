import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import UseStateExample from './useStateExample'
import UseEffectExample from './useEffectExample'
import ConditionalRendering from './conditional-rendering'

ReactDOM.render(
  <React.StrictMode>
    {/* <UseStateExample /> */}
    {/* <UseEffectExample /> */}
    <ConditionalRendering />
  </React.StrictMode>,
  document.getElementById('root')
)
