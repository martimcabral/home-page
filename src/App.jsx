import CurrentTimer from "./current-timer"
import Footer from "./footer"
import Timer from "./timer"

import imageF1 from "./imgs/f1.png"
import imageMeteor from "./imgs/meteor.jpg"
import imageHazbinHotel from "./imgs/hazbin-hotel-s2.png"
import imageTheAmazingDigitalCircus from "./imgs/tadc.png"
import imageSteam from "./imgs/steam.png"
import imageResidentEvilRequiem from "./imgs/re9.png"

function App() {
  return (
    <>
      <CurrentTimer />
      <div className="contentContainer">
        <table>
            <tr>
              <Timer 
                title="🌌 Meteor Shower - Leonids "
                dateJS="Nov 18, 2025 00:30:00"
                description="
                              18 de Novembro de 2025 - 00:30
                            "
                website="https://www.timeanddate.com/astronomy/meteor-shower/list.html"
                image={imageMeteor}
              />

              <Timer 
                title="🏨 Hazbin Hotel"
                dateJS="Nov 19, 2025 09:00:00"
                description="
                              7º & 8º Episódio - 2ª Temporada <br><br>
                              19 de Novembro de 2025 - 07:00
                            "
                website="https://www.amazon.com/-/es/gp/video/detail/B0FQV93QY8/ref=atv_dp_season_select_s2"
                image={imageHazbinHotel}
              />

              <Timer 
                title="🏎️ Fórmula 1:   🇺🇸 Las Vegas 🇺🇸"
                dateJS="Nov 23, 2025 03:00:00"
                description="
                              <i>20 de Novembro:</i> <br>
                              <b>Free Practice 1:</b> 23:30 - 00:30 <br><br>

                              <i>21 de Novembro:</i> <br>
                              <b>Free Practice 2:</b> 03:00 - 04:00 <br>
                              <b>Free Practice 3:</b> 23:30 - 00:30 <br><br>

                              <i>22 de Novembro:</i> <br>
                              <b>Qualifying:</b> 03:00 - 04:00 <br><br>

                              <i>23 de Novembro:</i> <br>
                              <b>Race:</b> 03:00 <br>
                            "
                website="https://www.formula1.com/"
                image={imageF1}
              />

              <Timer 
                title="🏎️ Fórmula 1:   🇶🇦 Catar 🇶🇦"
                dateJS="Nov 30, 2025 19:00:00"
                description="
                              28-30 de Novembro de 2025
                            "
                website="https://www.formula1.com/"
                image={imageF1}
              />

              <Timer 
                title="🏎️ Fórmula 1:   🇦🇪 Abu Dhabi 🇦🇪"
                dateJS="Dec 07, 2025 12:00:00"
                description="
                              5-7 de Dezembro de 2025
                            "
                website="https://www.formula1.com/"
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
