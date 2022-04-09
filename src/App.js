import { useState, useEffect, useRef } from "react";
import "./App.css";

const DATE_TIME_LAST_SAW = new Date("2022-02-07T11:30:01.000Z").getTime();
const DATE_TIME_WILL_SEE = new Date("2022-06-21T18:30:00.000Z").getTime();
const DATE_TIME_SINCE = new Date("2021-12-12T16:05:00.000Z").getTime();
const TOTAL_BETWEEN = DATE_TIME_WILL_SEE - DATE_TIME_LAST_SAW;

const getStr = (numeric, base, arr) => {
  if (numeric === 1) {
    arr.push(`${numeric} ${base.substring(0, base.length - 1)}`);
  } else if (numeric > 0) {
    arr.push(`${numeric} ${base}`);
  }
};

const fromSecondsToHtime = (seconds) => {
  let base = 60 * 60 * 24;
  let days = Math.floor(seconds / base);
  seconds %= base;
  base /= 24;
  let hours = Math.floor(seconds / base);
  seconds %= base;
  base /= 60;
  let minutes = Math.floor(seconds / base);
  seconds %= base;
  let arr = [];
  getStr(days, "días", arr);
  getStr(hours, "horas", arr);
  getStr(minutes, "minutos", arr);
  getStr(seconds, "segundos", arr);
  if (arr.length === 1) return arr[0];
  let last = arr.splice(-1);
  return `${arr.join(", ")} y ${last[0]}`;
};

function App() {
  const [seconds, setSeconds] = useState(() => {
    let timeto = DATE_TIME_WILL_SEE - new Date().getTime();
    return Math.floor(timeto / 1000);
  });
  const [htimeTo, setHtimeTo] = useState(() => {
    let secondsAux = Math.floor(
      (DATE_TIME_WILL_SEE - new Date().getTime()) / 1000
    );
    if (secondsAux <= 0) return null;
    return fromSecondsToHtime(secondsAux);
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
      let secondsAux = Math.floor((DATE_TIME_WILL_SEE - timeNow) / 1000);
      setSeconds(secondsAux);
      let htime = secondsAux > 0 ? fromSecondsToHtime(secondsAux) : null;
      setHtimeTo(htime);
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
          <>
            <p style={{ padding: "0 15px" }}>
              Faltan {seconds.toLocaleString("es-MX")} segundos para vernos 🙈
            </p>
            <p style={{ padding: "0 15px" }}>Faltan {htimeTo}</p>
          </>
        ) : null}
        {seconds > 0 ? (
          <p style={{ padding: "0 15px" }}>Llevamos {progress}% de la espera</p>
        ) : null}
        <p style={{ padding: "0 15px" }}>
          Llevamos {seconds2.toLocaleString("es-MX")} segundos juntos ❤️
        </p>
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
