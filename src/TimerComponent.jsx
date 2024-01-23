import React, { useEffect, useState, useCallback } from "react";

export default function TimerComponent({ buttonReadsStart }) {

  // Initialise Variables
  const startingNumberofMinutes = 25
  const startingNumberofSeconds = 0
  let startingNumberofMiliseconds = startingNumberofMinutes * 60000

  // Initialise States
  let [totalMinutesRemaining, setTotalMinutesRemaining] = useState(startingNumberofMinutes)
  let [totalSecondsRemaining, setTotalSecondsRemaining] = useState(startingNumberofSeconds)
  let [totalMilisecondsRemaining, setTotalMilisecondsRemaining] = useState(startingNumberofMiliseconds)
  let isTimerZero: boolean = false

  // Start/stop countdown when the start/pause button is pressed
  const countdown = () => {
    const intervalId = setInterval(() => {
      setTotalMilisecondsRemaining((prev) => prev - 1000);
    }, 1000);
    return intervalId; // Return the interval ID
  };

  const stopCountdown = (intervalId) => {
    clearInterval(intervalId);
  };

  useEffect(() => {
    let intervalId;
    if (!buttonReadsStart) {
      intervalId = countdown();
    } else {
      // Stop the countdown when buttonReadsStart is true
      stopCountdown(intervalId);
    }

    // Cleanup function to clear the interval when the component unmounts or when buttonReadsStart changes
    return () => {
      stopCountdown(intervalId);
    };
  }, [buttonReadsStart]);


  const recalculateMinutesToDisplay = useCallback(() => {
    setTotalMinutesRemaining(Math.floor(totalMilisecondsRemaining / 60000));
  }, [totalMilisecondsRemaining])

  const recalculateSecondsToDisplay = useCallback(() => {
    setTotalSecondsRemaining(Math.floor((totalMilisecondsRemaining % 60000) / 1000));
  }, [totalMilisecondsRemaining])


  useEffect(() => {
    recalculateMinutesToDisplay();
  }, [recalculateMinutesToDisplay, totalMilisecondsRemaining]);

  useEffect(() => {
    recalculateSecondsToDisplay();
  }, [recalculateSecondsToDisplay, totalMilisecondsRemaining]);


  // Pad display digits to always show two numbers
  let numberOfMinutesRemainingToDisplay = String(totalMinutesRemaining).padStart(2, '0')
  let numberOfSecondsRemainingToDisplay = String(totalSecondsRemaining).padStart(2, '0')

  return (
    <div className="TimerComponent">
      <h1>{numberOfMinutesRemainingToDisplay}:{numberOfSecondsRemainingToDisplay}</h1>
    </div>
  )
}
