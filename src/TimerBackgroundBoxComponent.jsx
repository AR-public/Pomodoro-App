import { useState } from "react"
import TimerComponent from "./TimerComponent"
import TimerButton from "./TimerButton"

export default function TimerBackgroundBox() {

  const [buttonState, setButtonState] = useState(true)
  function changeButtonState() { setButtonState(!buttonState) }

  return (
    <div id="TimerBackgroundBox" >
      <TimerComponent />
      <TimerButton renderStart={buttonState} changeButtonState={changeButtonState} />
    </div>
  )
}