var Element = document.getElementById("steamtimer")
var countDownDate = new Date("Sep 29, 2025 17:00:00").getTime();

function updateNSteamSaleTimer() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    Element.innerHTML = days + "D " + hours + "H "
        + minutes + "M " + seconds + "S ";

    if (distance < 0) {
        clearInterval(x);
        Element.innerHTML = "EXPIRED";
    }
}

updateNSteamSaleTimer();
var x = setInterval(updateNSteamSaleTimer, 1000);
