import { useState, useEffect } from "react";
import "./App.css";

const DATE_TIME = new Date("2021-12-04T16:30:00.000Z").getTime();

function App() {
  const [seconds, setSeconds] = useState(() => {
    let timeto = DATE_TIME - new Date().getTime();
    return (timeto / 1000).toFixed(0);
  });

  useEffect(() => {
    let intervalID = setInterval(() => {
      setSeconds(((DATE_TIME - new Date().getTime()) / 1000).toFixed(0));
    }, 1000);
    return () => clearInterval(intervalID);
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <p>{seconds.toLocaleString("es-MX")}</p>
      </div>
    </div>
  );
}

export default App;
