import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const events = [
    {
      title: "🏎️ Fórmula 1: 🇺🇸 Estados Unidos 🇺🇸",
      date: "2025-10-19T19:00:00",
      link: "https://www.formula1.com/",
      img: "./imgs/f1.png",
    },
    {
      title: "🌌 Meteor Shower - Orionids",
      date: "2025-10-21T23:30:00",
      link: "https://www.timeanddate.com/astronomy/meteor-shower/list.html",
      img: "imgs/meteoir.jpg",
      extra:
        "23:30 -> (NE/E) | 01:30 -> (E) <br /> 04:30 -> (SE) | 06:00 -> (S) <br /> 07:00 -> (SW)",
    },
    {
      title: "🏨 Hazbin Hotel - 2ª Temporada",
      date: "2025-10-29",
      link: "https://www.amazon.com/Hazbin-Hotel-Season-1/dp/B0CLM8LHS7",
      img: "imgs/habin_hotel.png",
    },
  ];

  return (
    <div>
      <div className="current-time">
        <h1>{currentTime.toLocaleTimeString()}</h1>
      </div>

      <div className="container">
        <table>
          <tbody>
            {events.map((event, index) => (
              <tr key={index}>
                <td>
                  <a href={event.link} target="_blank" rel="noopener noreferrer">
                    <img className="content-logo" src={event.img} alt={event.title} />
                  </a>
                </td>
                <td>
                  <p className="content-title">{event.title}</p>
                  <p className="content-date">
                    {new Date(event.date).toLocaleString()}
                  </p>
                  {event.extra && (
                    <p
                      className="content-date"
                      dangerouslySetInnerHTML={{ __html: event.extra }}
                    ></p>
                  )}
                  <p className="content-timer">
                    {/* Aqui podes adicionar um timer React se quiseres */}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
