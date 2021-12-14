import { useState, useEffect, useRef } from "react";
import "./App.css";

const DATE_TIME = new Date("2021-12-19T02:10:00.000Z").getTime();
const DATE_TIME_SINCE = new Date("2021-12-12T16:05:00.000Z").getTime();

function App() {
  const [seconds, setSeconds] = useState(() => {
    let timeto = DATE_TIME - new Date().getTime();
    return Math.floor(timeto / 1000);
  });
  const [seconds2, setSeconds2] = useState(
    Math.floor((new Date().getTime() - DATE_TIME_SINCE) / 1000)
  );

  const interval1Ref = useRef(null);

  useEffect(() => {
    interval1Ref.current = setInterval(() => {
      setSeconds(Math.floor((DATE_TIME - new Date().getTime()) / 1000));
      setSeconds2(Math.floor((new Date().getTime() - DATE_TIME_SINCE) / 1000));
    }, 1000);
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        {seconds > 0 ? (
          <p>
            Faltan {seconds.toLocaleString("es-MX")} segundos para vernos 🙈
          </p>
        ) : null}
        <p>Llevamos {seconds2.toLocaleString("es-MX")} segundos juntos ❤️</p>
      </div>
    </div>
  );
}

export default App;
