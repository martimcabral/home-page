import CurrentTimer from "./components/current-timer"
import Footer from "./components/footer"
import Timer from "./components/timer"

function App() {
  return (
    <>
      <CurrentTimer />
      <div className="mainContainer">
        <table>
            <tr>
              <Timer 
                title="🏎️ Fórmula 1:   🇺🇸 Estados Unidos 🇺🇸"
                dateJS="Oct 19, 2025 19:00:00"
                description="
                              <i>17 de Outubro:</i> <br>
                              <b>Free Practice 1:</b> 17:30 - 18:30 <br>
                              <b>Sprint Qualifying:</b> 21:30 - 22:14 <br><br>
                              <i>18 de Outubro:</i> <br>
                              <b>Sprint:</b> 17:00 17:30 <br>
                              <b>Qualifying:</b> 21:00 - 22:00 <br><br>
                              <i>19 de Outubro: </i> <br>
                              <b>Race:</b> 19:00 <br>
                            "
                website="https://www.formula1.com/"
                image="./src/imgs/f1.png"
              />
                
              <Timer 
                title="🌌 Meteor Shower - Orionids "
                dateJS="Oct 21, 2025 23:30:00"
                description="
                              23:30 -> (NE/E) | 01:30 -> (E) <br>
                              04:30 -> (SE) | 06:00 -> (S) <br>
                              07:00 -> (SW) <br><br>
                              21-22 de Outubro de 2025 - 23:30
                            "
                website="https://www.timeanddate.com/astronomy/meteor-shower/list.html"
                image="./src/imgs/meteor.jpg"
              />

              <Timer 
                title="🏨 Hazbin Hotel"
                dateJS="Oct 29, 2025 00:00:00"
                description="
                              1º & 2º Episódio - 2ª Temporada <br><br>
                              29 de Outubro de 2025
                            "
                website="https://www.amazon.com/-/es/gp/video/detail/B0FQV93QY8/ref=atv_dp_season_select_s2"
                image="./src/imgs/hazbin-hotel-s2.png"
              />
              

              <Timer 
                title="🏨 Hazbin Hotel"
                dateJS="Nov 5, 2025 00:00:00"
                description="
                              3º & 4º Episódio - 2ª Temporada <br><br>
                              5 de Novembro de 2025
                            "
                website="https://www.amazon.com/-/es/gp/video/detail/B0FQV93QY8/ref=atv_dp_season_select_s2"
                image="./src/imgs/hazbin-hotel-s2.png"
              />

              <Timer 
                title="🏨 Hazbin Hotel"
                dateJS="Nov 12, 2025 00:00:00"
                description="
                              5º & 6º Episódio - 2ª Temporada <br><br>
                              12 de Novembro de 2025
                            "
                website="https://www.amazon.com/-/es/gp/video/detail/B0FQV93QY8/ref=atv_dp_season_select_s2"
                image="./src/imgs/hazbin-hotel-s2.png"
              />

              <Timer 
                title="🏨 Hazbin Hotel"
                dateJS="Nov 19, 2025 00:00:00"
                description="
                              7º & 8º Episódio - 2ª Temporada <br><br>
                              19 de Novembro de 2025
                            "
                website="https://www.amazon.com/-/es/gp/video/detail/B0FQV93QY8/ref=atv_dp_season_select_s2"
                image="./src/imgs/hazbin-hotel-s2.png"
              />

              <Timer 
                title="🎪 The Amazing Digital Circus"
                dateJS="Dec 12, 2025 22:00:00"
                description="
                              7º Episódio - 1ª Temporada <br><br>
                              12 de Dezembro de 2025 - 22:00
                            "
                website="https://www.youtube.com/watch?v=c6_4szhYNbA"
                image="./src/imgs/tadc.png"
              />

              <Timer 
                title="❄️ Promoção da Steam: Inverno"
                dateJS="Dec 18, 2025 17:00:00"
                description="18 de Dezembro de 2025 - 17:00"
                website="https://store.steampowered.com/wishlist/id/atlas_13/"
                image="./src/imgs/steam.png"
              />

              <Timer 
                title="🌆 Resident Evil Requiem"
                dateJS="Feb 27, 2026 17:00:00"
                description="27 de Fevereiro de 2026"
                website="https://store.steampowered.com/app/3764200/Resident_Evil_Requiem/"
                image="./src/imgs/re9.png"
              />

              <Timer 
                title="🎪 The Amazing Digital Circus"
                dateJS="Mar 20, 2026 22:00:00"
                description="
                              8º Episódio - 1ª Temporada <br><br>
                              20 de Março de 2026 - 22:00
                            "
                website="https://store.steampowered.com/wishlist/id/atlas_13/"
                image="./src/imgs/tadc.png"
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
