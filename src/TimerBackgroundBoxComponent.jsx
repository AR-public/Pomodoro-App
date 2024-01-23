import { useState, useEffect } from "react"
import TimerComponent from "./TimerComponent"
import TimerButton from "./TimerButton"

export default function TimerBackgroundBox() {

  const [buttonReadsStart, setButtonReadsStart] = useState(true)

  useEffect(() => {
    fetch('http://localhost:3000/')
      .then(response => response.json())
      .then(data => console.log(data));
  }, [])


  function changeButtonState() { setButtonReadsStart(!buttonReadsStart) }

  return (
    <div id="TimerBackgroundBox" >
      <TimerComponent buttonReadsStart={buttonReadsStart} />
      <TimerButton buttonReadsStart={buttonReadsStart} changeButtonState={changeButtonState} />
    </div>
  )
}