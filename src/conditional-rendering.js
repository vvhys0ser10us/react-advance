import MultipleReturns from './tutorial/3-conditional-rendering/setup/1-multiple-returns'
import ShortCircuit from './tutorial/3-conditional-rendering/setup/2-short-circuit'
import ShowHide from './tutorial/3-conditional-rendering/setup/3-show-hide'

function ConditionalRendering() {
  return (
    <div className="container">
      <MultipleReturns></MultipleReturns>
      <br />
      <hr />
      <br />
      <ShortCircuit></ShortCircuit>
      <br />
      <hr />
      <br />
      <ShowHide></ShowHide>
      <br />
      <hr />
      <br />
    </div>
  )
}

export default ConditionalRendering
