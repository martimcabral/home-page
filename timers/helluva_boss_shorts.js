var ElementHB_S = document.getElementById("HB_Stimer")
var countDownDateHB_S = new Date("Sep 6, 2025 00:00:00").getTime();

function updateHB_STimer() {
    var nowHB_S = new Date().getTime();
    var distanceHB_S = countDownDateHB_S - nowHB_S;

    var daysHB_S = Math.floor(distanceHB_S / (1000 * 60 * 60 * 24));
    var hoursHB_S = Math.floor((distanceHB_S % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutesHB_S = Math.floor((distanceHB_S % (1000 * 60 * 60)) / (1000 * 60));
    var secondsHB_S = Math.floor((distanceHB_S % (1000 * 60)) / 1000);

    if (distanceHB_S < 0) {
        clearInterval(x);
        ElementHB_S.innerHTML = "EXPIRED";

    } else if (daysHB_S < 1) {
        ElementHB_S.innerHTML = hoursHB_S + "H " + minutesHB_S + "M " + secondsHB_S + "S";
    
    } else {
        ElementHB_S.innerHTML = daysHB_S + "D " + hoursHB_S + "H " + minutesHB_S + "M ";
    }
}

updateHB_STimer();
var x = setInterval(updateHB_STimer, 1000);
