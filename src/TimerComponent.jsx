import React, { useEffect, useState, useRef } from "react";

export default function TimerComponent(buttonReadsStart) {

  // Initialise Variables
  const startingNumberofMinutes = 25
  const startingNumberofSeconds = 0
  let startingNumberofMiliseconds = startingNumberofMinutes * 60000

  // Initialise States
  let [totalMinutesRemaining, setTotalMinutesRemaining] = useState(startingNumberofMinutes)
  let [totalSecondsRemaining, setTotalSecondsRemaining] = useState(startingNumberofSeconds)
  // let [totalMilisecondsRemaining, setTotalMilisecondsRemaining] = useState(startingNumberofMiliseconds)

  let totalMilisecondsRemaining = useRef(startingNumberofMiliseconds)

  // Pad display digits to always show two numbers
  let numberOfSecondsRemainingToDisplay = String(totalSecondsRemaining).padStart(2, '0')
  let numberOfMinutesRemainingToDisplay = String(totalMinutesRemaining).padStart(2, '0')

  // Functions

  // useEffect() runs when anything in the DOM re-renders
  useEffect(() => {
    const interval = setInterval(() => { (totalMilisecondsRemaining.current = totalMilisecondsRemaining - 1000) }, 1000);
    setTotalMinutesRemaining(Math.floor(totalMilisecondsRemaining / 60000));
    setTotalSecondsRemaining(Math.floor(totalMilisecondsRemaining / 1000));
    return () => clearInterval(interval);
  }, [totalMilisecondsRemaining, startingNumberofMiliseconds]);

  return (
    <div className="TimerComponent">
      <h1>{numberOfMinutesRemainingToDisplay}:{numberOfSecondsRemainingToDisplay}</h1>
    </div>
  )
}