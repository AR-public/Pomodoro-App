import './App.css';
import TimerComponent from './TimerComponent';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="TimerBackgroundBox">
        <TimerComponent />
      </div>
    </div>
  );
}

export default App;
