var ElementHH = document.getElementById("hhtimer")
var countDownDateHH = new Date("Oct 29, 2025 00:00:00").getTime();

function updateHHTimer() {
    var nowHH = new Date().getTime();
    var distanceHH = countDownDateHH - nowHH;

    var daysHH = Math.floor(distanceHH / (1000 * 60 * 60 * 24));
    var hoursHH = Math.floor((distanceHH % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutesHH = Math.floor((distanceHH % (1000 * 60 * 60)) / (1000 * 60));
    var secondsHH = Math.floor((distanceHH % (1000 * 60)) / 1000);

    ElementHH.innerHTML = daysHH + "D " + hoursHH + "H "
        + minutesHH + "M " + secondsHH + "S ";

    if (distanceHH < 0) {
        clearInterval(x);
        ElementHH.innerHTML = "EXPIRED";
    }
}

updateHHTimer();
var x = setInterval(updateHHTimer, 1000);
