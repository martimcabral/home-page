var ElementF1 = document.getElementById("f1timer");
var countDownDateF1 = new Date("Aug 3, 2025 13:00:00").getTime();

function updateF1Timer() {
    var nowF1 = new Date().getTime();
    var distanceF1 = countDownDateF1 - nowF1;

    var daysF1 = Math.floor(distanceF1 / (1000 * 60 * 60 * 24));
    var hoursF1 = Math.floor((distanceF1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutesF1 = Math.floor((distanceF1 % (1000 * 60 * 60)) / (1000 * 60));
    var secondsF1 = Math.floor((distanceF1 % (1000 * 60)) / 1000);

    ElementF1.innerHTML = daysF1 + "D " + hoursF1 + "H "
        + minutesF1 + "M " + secondsF1 + "S ";

    if (distanceF1 < 0) {
        clearInterval(x);
        ElementF1.innerHTML = "EXPIRED";
    }
}

updateF1Timer();
var x = setInterval(updateF1Timer, 1000);
