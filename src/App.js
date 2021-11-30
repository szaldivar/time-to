import { useState, useEffect } from "react";
import "./App.css";

const DATE_TIME = new Date("2021-12-04T16:30:00.000Z").getTime();

function App() {
  const [seconds, setSeconds] = useState(() => {
    let timeto = DATE_TIME - new Date().getTime();
    return Math.floor(timeto / 1000);
  });

  useEffect(() => {
    let intervalID = setInterval(() => {
      setSeconds(Math.floor((DATE_TIME - new Date().getTime()) / 1000));
    }, 1000);
    return () => clearInterval(intervalID);
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <p>Faltan {seconds.toLocaleString("es-MX")} segundos para vernos 🙈</p>
      </div>
    </div>
  );
}

export default App;
