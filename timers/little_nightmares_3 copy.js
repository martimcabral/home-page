var Element_nightmare = document.getElementById("_nightmaretimer");
var countDownDate_nightmare = new Date("Aug 15, 2025 17:00:00").getTime();

function update_nightmareTimer() {
    var now_nightmare = new Date().getTime();
    var distance_nightmare = countDownDate_nightmare - now_nightmare;

    var days_nightmare = Math.floor(distance_nightmare / (1000 * 60 * 60 * 24));
    var hours_nightmare = Math.floor((distance_nightmare % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes_nightmare = Math.floor((distance_nightmare % (1000 * 60 * 60)) / (1000 * 60));
    var seconds_nightmare = Math.floor((distance_nightmare % (1000 * 60)) / 1000);

    if (distance_nightmare < 0) {
        clearInterval(x);
        Element_nightmare.innerHTML = "EXPIRED";

    } else if (days_nightmare < 1) {
        Element_nightmare.innerHTML = hours_nightmare + "H " + minutes_nightmare + "M " + seconds_nightmare + "S";
        
    } else {
        Element_nightmare.innerHTML = days_nightmare + "D " + hours_nightmare + "H " + minutes_nightmare + "M";
    }
}

update_nightmareTimer();
var x = setInterval(update_nightmareTimer, 1000);
