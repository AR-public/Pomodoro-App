import React from "react";
import { useState } from "react";

let startingTimerValue = 25
export default function TimerComponent() {

  const [timerValue, setTimerValue] = useState(startingTimerValue)

  return (
    <div className="TimerComponent">
      <h1>{startingTimerValue}:00</h1>
    </div>
  )
}
