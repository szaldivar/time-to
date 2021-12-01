import { useState, useEffect, useRef } from "react";
import "./App.css";

const DATE_TIME = new Date("2021-12-04T16:30:00.000Z").getTime();
const DATE_TIME2 = new Date("2021-12-04T18:00:00.000Z").getTime();

function App() {
  const [seconds, setSeconds] = useState(() => {
    let timeto = DATE_TIME - new Date().getTime();
    return Math.floor(timeto / 1000);
  });
  const [seconds2, setSeconds2] = useState(
    Math.floor((DATE_TIME2 - new Date().getTime()) / 1000)
  );

  const interval1Ref = useRef(null);

  useEffect(() => {
    interval1Ref.current = setInterval(() => {
      setSeconds(Math.floor((DATE_TIME - new Date().getTime()) / 1000));
    }, 1000);
  }, []);

  useEffect(() => {
    if (seconds < 0) {
      console.log("here");
      if (interval1Ref.current) {
        clearInterval(interval1Ref.current);
        interval1Ref.current = null;
        setInterval(() => {
          setSeconds2(Math.floor((DATE_TIME2 - new Date().getTime()) / 1000));
        }, 1000);
      }
    }
  }, [seconds]);

  return (
    <div className="App">
      <div className="App-header">
        {seconds > 0 ? (
          <p>
            Faltan {seconds.toLocaleString("es-MX")} segundos para vernos 🙈
          </p>
        ) : (
          <div>
            <img
              style={{
                height: 600,
              }}
              src="/time-to/ticket.jpg"
              alt="ticket"
            />
            <div>
              Siguiente sorpresa en {seconds2.toLocaleString("es-MX")} segundos
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
