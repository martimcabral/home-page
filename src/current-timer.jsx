import { useState, useEffect } from "react";

function CurrentTimer() {
  const [time, setTime] = useState("")
  const currentTime = new Date()
  const day = currentTime.getDate()
  const month = currentTime.getMonth() + 1
  let monthText = "null"
  const year = currentTime.getFullYear();

  switch (month) {
    case 1: monthText = "Janeiro"; break;
    case 2: monthText = "Fevereiro"; break;
    case 3: monthText = "Março"; break;
    case 4: monthText = "Abril"; break;
    case 5: monthText = "Maio"; break;
    case 6: monthText = "Junho"; break;
    case 7: monthText = "Julho"; break;
    case 8: monthText = "Agosto"; break;
    case 9: monthText = "Setembro"; break;
    case 10: monthText = "Outubro"; break;
    case 11: monthText = "Novembro"; break;
    case 12: monthText = "Dezembro"; break;
  }

  console.log(month, " ", monthText)

  const currentTimeText = `${day} de ${monthText} de ${year}`;

  useEffect(() => {
    function updateTime() {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      setTime(`${hours}:${minutes}:${seconds}`);
    }

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="current-time">
      <h1>{time}</h1>
      <h2>{currentTimeText}</h2>
    </div>
  );
}

export default CurrentTimer;
