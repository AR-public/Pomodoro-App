import { useState } from "react"
import TimerComponent from "./TimerComponent"
import TimerButton from "./TimerButton"

export default function TimerBackgroundBox() {

  const [buttonReadsStart, setButtonReadsStart] = useState(true)
  function changeButtonState() { setButtonReadsStart(!buttonReadsStart) }

  return (
    <div id="TimerBackgroundBox" >
      <TimerComponent buttonReadsStart={buttonReadsStart} />
      <TimerButton buttonReadsStart={buttonReadsStart} changeButtonState={changeButtonState} />
    </div>
  )
}