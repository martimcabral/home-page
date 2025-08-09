var Element_MS = document.getElementById("_MStimer");
var countDownDate_MS = new Date("Aug 12, 2025 23:08:00").getTime();

function update_MSTimer() {
    var now_MS = new Date().getTime();
    var distance_MS = countDownDate_MS - now_MS;

    var days_MS = Math.floor(distance_MS / (1000 * 60 * 60 * 24));
    var hours_MS = Math.floor((distance_MS % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes_MS = Math.floor((distance_MS % (1000 * 60 * 60)) / (1000 * 60));
    var seconds_MS = Math.floor((distance_MS % (1000 * 60)) / 1000);

    if (distance_MS < 0) {
        clearInterval(x);
        Element_MS.innerHTML = "EXPIRED";
    } else {
        Element_MS.innerHTML = days_MS + "D " + hours_MS + "H " + minutes_MS + "M " + seconds_MS + "S ";
    }
}

update_MSTimer();
var x = setInterval(update_MSTimer, 1000);
