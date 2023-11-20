export default function TimerButton({ renderStart, changeButtonState }) {

  return (
    <button className="TimerButton" onClick={changeButtonState} > {renderStart ? "Start" : "Pause"}</button >
  )
}