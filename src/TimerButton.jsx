export default function TimerButton({ buttonReadsStart, changeButtonState }) {

  return (
    <button className="TimerButton" onClick={changeButtonState} > {buttonReadsStart ? "Start" : "Pause"}</button >
  )
}