import React, { useEffect, useState, useRef } from "react";

export default function TimerComponent(buttonReadsStart) {

  // Initialise Variables
  const startingNumberofMinutes = 25
  const startingNumberofSeconds = 0
  let startingNumberofMiliseconds = startingNumberofMinutes * 60000

  // Initialise States
  let [totalMinutesRemaining, setTotalMinutesRemaining] = useState(startingNumberofMinutes)
  let [totalSecondsRemaining, setTotalSecondsRemaining] = useState(startingNumberofSeconds)
  let [totalMilisecondsRemaining, setTotalMilisecondsRemaining] = useState(startingNumberofMiliseconds)

  // Watch value of buttonReadsStart

  function countdown() { setInterval(() => setTotalMilisecondsRemaining(totalMilisecondsRemaining--), 1000) }
  function stopCountdown() { clearInterval(countdown) }

  useEffect(() => {
    buttonReadsStart ? countdown() : stopCountdown()
  }, [buttonReadsStart]);

  // Calculate Variables 
  setTotalMinutesRemaining(Math.floor())
  setTotalSecondsRemaining()
  setTotalMilisecondsRemaining()


  // Pad display digits to always show two numbers
  let numberOfSecondsRemainingToDisplay = String(totalSecondsRemaining).padStart(2, '0')
  let numberOfMinutesRemainingToDisplay = String(totalMinutesRemaining).padStart(2, '0')


  // useEffect() runs when anything in the DOM re-renders


  return (
    <div className="TimerComponent">
      <h1>{numberOfMinutesRemainingToDisplay}:{numberOfSecondsRemainingToDisplay}</h1>
    </div>
  )
}