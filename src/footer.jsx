import { useEffect, useRef, useState } from "react";
import soundsOuterWilds from "./sounds/outer_wilds.mp3"

function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.05;
    }
  }, []);

  return (
    <div className="footer">
      <p>© Martim Cabral - {year}</p>
      <audio
        ref={audioRef}
        src={soundsOuterWilds}
        loop
        controls
        autoPlay
      ></audio>
    </div>
  );
}

export default Footer;
