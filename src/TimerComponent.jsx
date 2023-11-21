import React from "react";
import { useState } from "react";

export default function TimerComponent(buttonReadsStart) {

  // Initialise Variables
  const startingNumberofMinutes = 25
  const startingNumberofSeconds = 0
  let startingNumberofMiliseconds = startingNumberofMinutes * 60000

  // Initialise States
  const [totalMinutesRemaining, setTotalMinutesRemaining] = useState(Math.floor(startingNumberofMinutes))

  const [totalSecondsRemaining, setTotalSecondsRemaining] = useState(startingNumberofSeconds)

  // Pad display digits to always show two numbers
  let numberOfSecondsRemainingToDisplay = String(totalSecondsRemaining).padStart(2, '0')

  let numberOfMinutesRemainingToDisplay = String(totalMinutesRemaining).padStart(2, '0')


  // Functions to run every milisecond/second

  function commenceCountdown() { setInterval((startingNumberofMiliseconds--, console.log(startingNumberofMiliseconds)), 1) }

  // This needs a watcher of some kind
  buttonReadsStart ? clearInterval(commenceCountdown) : commenceCountdown()

  return (
    <div className="TimerComponent" onClick={() => commenceCountdown()}>
      <h1>{numberOfMinutesRemainingToDisplay}:{numberOfSecondsRemainingToDisplay}</h1>
    </div>
  )
}

// NEXT STEPS - UNDERSTAND HOW TO IMPLEMENT SET_INTERVAL AND UPDATE THE VALUES FOR THE DISPLAY MINUTES AND SECONDS

// LOGIC OF TIMER:
//
// 1. Ask user to input an integer (number of minutes)

// 2. Convert the minutes into miliseconds (this is the total time you have to play with)

// 3. Every second, subtract 1000 miliseconds from this total time value

// 4. Every second, divide the total time by 60,000 and round down to the nearest integer to find the TOTAL NUMBER OF MINUTES

// 5. Every second, subtract the total time by (TOTAL NUMBER OF MINUTES * 60,000), divide by 1000 and round down to the nearest integer to find the TOTAL NUMBER OF SECONDS

// 6. Once the TOTAL NUMBER OF MINUTES and TOTAL NUMBER SECONDS = 0, stop the timer

// 7. Every second, render the total number of minutes and seconds