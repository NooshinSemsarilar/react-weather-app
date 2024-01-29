
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
      <div className="container">
          <Weather />
        <footer>
          <p>
           This code is <a href="https://github.com/Nooshin0962/react-weather-app" target="_blank" rel="noreferrer">open source</a> by Nooshin Semsarilar
          </p>
        </footer>
      </div>
    </div>
  );
}

