import { useState, useEffect, useRef } from "react";
import "./App.css";

const DATE_TIME_LAST_SAW = new Date("2022-02-07T11:30:01.000Z").getTime();
const DATE_TIME_WILL_SEE = new Date("2022-06-21T18:30:00.000Z").getTime();
const DATE_TIME_SINCE = new Date("2021-12-12T16:05:00.000Z").getTime();
const TOTAL_BETWEEN = DATE_TIME_WILL_SEE - DATE_TIME_LAST_SAW;

function App() {
  const [seconds, setSeconds] = useState(() => {
    let timeto = DATE_TIME_WILL_SEE - new Date().getTime();
    return Math.floor(timeto / 1000);
  });
  const [seconds2, setSeconds2] = useState(() =>
    Math.floor((new Date().getTime() - DATE_TIME_SINCE) / 1000)
  );
  const [progress, setProgress] = useState(() => {
    let timeNow = new Date().getTime();
    if (timeNow >= DATE_TIME_WILL_SEE) return "100";
    return (((timeNow - DATE_TIME_LAST_SAW) / TOTAL_BETWEEN) * 100).toFixed(2);
  });

  const interval1Ref = useRef(null);

  useEffect(() => {
    interval1Ref.current = setInterval(() => {
      let timeNow = new Date().getTime();
      setSeconds(Math.floor((DATE_TIME_WILL_SEE - timeNow) / 1000));
      setSeconds2(Math.floor((timeNow - DATE_TIME_SINCE) / 1000));
      if (timeNow >= DATE_TIME_WILL_SEE) setProgress("100");
      else
        setProgress(
          (((timeNow - DATE_TIME_LAST_SAW) / TOTAL_BETWEEN) * 100).toFixed(2)
        );
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
        {seconds > 0 ? <p>Llevamos {progress}% de la espera</p> : null}
        <p>Llevamos {seconds2.toLocaleString("es-MX")} segundos juntos ❤️</p>
      </div>
      <div
        style={{
          position: "fixed",
          inset: 0,
          transform: `translate(${progress}%)`,
          backgroundColor: "hsl(220, 13%, 21%)",
          zIndex: -10,
        }}
      ></div>
    </div>
  );
}

export default App;
