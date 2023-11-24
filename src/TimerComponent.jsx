import React, { useEffect, useState } from "react";

export default function TimerComponent({ buttonReadsStart }) {

  // Initialise Variables
  const startingNumberofMinutes = 25
  const startingNumberofSeconds = 0
  let startingNumberofMiliseconds = startingNumberofMinutes * 60000

  // Initialise States
  let [totalMinutesRemaining, setTotalMinutesRemaining] = useState(startingNumberofMinutes)
  let [totalSecondsRemaining, setTotalSecondsRemaining] = useState(startingNumberofSeconds)
  let [totalMilisecondsRemaining, setTotalMilisecondsRemaining] = useState(startingNumberofMiliseconds)

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [buttonReadsStart]);

  // Calculate Minute/Seconds 
  function recalculateMinutesToDisplay() {
    setTotalMinutesRemaining(Math.floor(totalMilisecondsRemaining / 60000));
  }

  function recalculateSecondsToDisplay() {
    setTotalSecondsRemaining(Math.floor((totalMilisecondsRemaining % 60000) / 1000));
  }

  useEffect(() => {
    recalculateMinutesToDisplay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalMilisecondsRemaining]);

  useEffect(() => {
    recalculateSecondsToDisplay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalMilisecondsRemaining]);

  // Pad display digits to always show two numbers
  let numberOfMinutesRemainingToDisplay = String(totalMinutesRemaining).padStart(2, '0')
  let numberOfSecondsRemainingToDisplay = String(totalSecondsRemaining).padStart(2, '0')

  return (
    <div className="TimerComponent">
      <h1>{numberOfMinutesRemainingToDisplay}:{numberOfSecondsRemainingToDisplay}</h1>
    </div>
  )
}
