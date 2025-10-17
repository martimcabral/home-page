import { useState, useEffect } from "react";

function Timer({ title, dateJS, website, image, description }) {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const countDownDate = new Date(dateJS).getTime();

    function updateTimer() {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance < 0) {
        setTimeLeft("EXPIRED");
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (days < 1) {
        setTimeLeft(`${hours}H ${minutes}M ${seconds}S`);
      } else {
        setTimeLeft(`${days}D ${hours}H ${minutes}M`);
      }
    }

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [dateJS]);

  return (
    <tr>
      <td>
        <a href={website} target="_blank">
          <img className="content-logo" src={image} alt={title} />
        </a>
      </td>
      <td>
        <p className="content-title">{title}</p>
        {description && (
          <p
            className="content-paragraph"
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
        )}
        <p className="content-timer">{timeLeft}</p>
      </td>
    </tr>
  );
}

export default Timer;
