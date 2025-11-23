import CurrentTimer from "./current-timer"
import Footer from "./footer"
import Timer from "./timer"

import imageF1 from "./imgs/f1.png"
import imageMeteor from "./imgs/meteor.jpg"
import imageTheAmazingDigitalCircus from "./imgs/tadc.png"
import imageSteam from "./imgs/steam.png"
import imageResidentEvilRequiem from "./imgs/re9.png"
import imageEuroTruckSimulator from "./imgs/ets2.png"

function App() {
  return (
    <>
      <CurrentTimer />
      <div className="contentContainer">
        <table>
            <tr>
              <Timer 
                title="🚚 Euro Truck Simulator 2"
                dateJS="Nov 28, 2025 19:00:00"
                description="
                              Nordic Horizons<br>
                              28 de Novembro de 2025
                            "
                website="https://store.steampowered.com/app/2780810/Euro_Truck_Simulator_2__Nordic_Horizons/"
                image={imageEuroTruckSimulator}
              />

              <Timer 
                title="🏎️ Fórmula 1:   🇶🇦 Catar 🇶🇦"
                dateJS="Nov 30, 2025 19:00:00"
                description="
                              <i>28 de Novembro:</i> <br>
                              <b>Free Practice 1:</b> 12:30 - 13:30 <br>
                              <b>Sprint Qualifying:</b> 16:30 - 17:14 <br><br>

                              <i>29 de Novembro:</i> <br>
                              <b>Sprint:</b> 13:00 - 14:00 <br>
                              <b>Qualifying:</b> 17:00 - 18:00 <br><br>

                              <i>30 de Novembro:</i> <br>
                              <b>Race:</b> 15:00 - 17:00<br>
                            "
                website="https://www.formula1.com/en/racing/2025/qatar"
                image={imageF1}
              />

              <Timer 
                title="🏎️ Fórmula 1:   🇦🇪 Abu Dhabi 🇦🇪"
                dateJS="Dec 07, 2025 12:00:00"
                description="
                              5-7 de Dezembro de 2025 - 12:00
                            "
                website="https://www.formula1.com/en/racing/2025/united-arab-emirates"
                image={imageF1}
              />

              <Timer 
                title="🎪 The Amazing Digital Circus"
                dateJS="Dec 12, 2025 22:00:00"
                description="
                              7º Episódio - 1ª Temporada <br><br>
                              12 de Dezembro de 2025 - 22:00
                            "
                website="https://www.youtube.com/watch?v=c6_4szhYNbA"
                image={imageTheAmazingDigitalCircus}
              />

              <Timer 
                title="🌌 Meteor Shower - Geminids"
                dateJS="Dec 13, 2025 19:45:00"
                description="
                              13 de Dezembro de 2025 - 19:45
                            "
                website="https://www.timeanddate.com/astronomy/meteor-shower/list.html"
                image={imageMeteor}
              />

              <Timer 
                title="❄️ Promoção da Steam: Inverno"
                dateJS="Dec 18, 2025 17:00:00"
                description="18 de Dezembro de 2025 - 17:00"
                website="https://store.steampowered.com/wishlist/id/atlas_13/"
                image={imageSteam}
              />

              <Timer 
                title="🌆 Resident Evil Requiem"
                dateJS="Feb 27, 2026 17:00:00"
                description="27 de Fevereiro de 2026"
                website="https://store.steampowered.com/app/3764200/Resident_Evil_Requiem/"
                image={imageResidentEvilRequiem}
              />

              <Timer 
                title="🎪 The Amazing Digital Circus"
                dateJS="Mar 20, 2026 22:00:00"
                description="
                              8º Episódio - 1ª Temporada <br><br>
                              20 de Março de 2026 - 22:00
                            "
                website="https://store.steampowered.com/wishlist/id/atlas_13/"
                image={imageTheAmazingDigitalCircus}
              />
            </tr>
        </table>

      </div>
      <Footer />
      <br />
      <br />
    </>
  )
}

export default App
