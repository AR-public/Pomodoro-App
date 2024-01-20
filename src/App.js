import './App.css';
import Navbar from './Navbar';
import TimerBackgroundBox from './TimerBackgroundBoxComponent';

function App() {
  return (
    <div className="App">
      <Navbar />
      <TimerBackgroundBox />
    </div>
  );
}

export default App;

// SHERBAZ'S IDEA TO ADD PROFILES FOR DIFFERENT TYPES OF TASKS
// E.G. WORKOUT (5MIN/30S) OR READING (30MINS/5MINS) OR CODING(15/3)