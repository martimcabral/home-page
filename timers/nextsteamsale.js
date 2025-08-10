var ElementSteam = document.getElementById("steamtimer")
var countDownDateSteam = new Date("Sep 29, 2025 17:00:00").getTime();

function updateNSteamSaleTimer() {
    var nowSteam = new Date().getTime();
    var distanceSteam = countDownDateSteam - nowSteam;

    var daysSteam = Math.floor(distanceSteam / (1000 * 60 * 60 * 24));
    var hoursSteam = Math.floor((distanceSteam % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutesSteam = Math.floor((distanceSteam % (1000 * 60 * 60)) / (1000 * 60));
    var secondsSteam = Math.floor((distanceSteam % (1000 * 60)) / 1000);

    if (distanceSteam < 0) {
        clearInterval(x);
        ElementSteam.innerHTML = "EXPIRED";

    } else if (daysSteam < 1) {
        ElementSteam.innerHTML = hoursSteam + "H " + minutesSteam + "M " + secondsSteam + "S";

    } else {
        ElementSteam.innerHTML = daysSteam + "D " + hoursSteam + "H " + minutesSteam + "M";
    }
}

updateNSteamSaleTimer();
var x = setInterval(updateNSteamSaleTimer, 1000);
