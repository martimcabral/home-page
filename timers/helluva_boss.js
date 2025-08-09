var ElementHB = document.getElementById("hbtimer")
var countDownDateHB = new Date("Sep 10, 2025 00:00:00").getTime();

function updateHBTimer() {
    var nowHB = new Date().getTime();
    var distanceHB = countDownDateHB - nowHB;

    var daysHB = Math.floor(distanceHB / (1000 * 60 * 60 * 24));
    var hoursHB = Math.floor((distanceHB % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutesHB = Math.floor((distanceHB % (1000 * 60 * 60)) / (1000 * 60));
    var secondsHB = Math.floor((distanceHB % (1000 * 60)) / 1000);

    if (distanceHB < 0) {
        clearInterval(x);
        ElementHB.innerHTML = "EXPIRED";
    } else {
        ElementHB.innerHTML = daysHB + "D " + hoursHB + "H " + minutesHB + "M " + secondsHB + "S ";
    }
}

updateHBTimer();
var x = setInterval(updateHBTimer, 1000);
