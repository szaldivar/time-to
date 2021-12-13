import { useState, useEffect, useRef } from "react";
import "./App.css";

const DATE_TIME = new Date("2021-12-19T02:10:00.000Z").getTime();
const DATE_TIME2 = new Date("2021-12-11T20:00:00.000Z").getTime();

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
            {seconds2 > 0 ? (
              <div>
                Siguiente sorpresa en {seconds2.toLocaleString("es-MX")}{" "}
                segundos
              </div>
            ) : (
              <div>
                <a href="https://drive.google.com/drive/folders/1oVii4CAY0Ujk8oaI9kcQPiXBLvDhciWp?usp=sharing">
                  No te rías mucho
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
