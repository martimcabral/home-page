var Element_tadc1 = document.getElementById("_tadc1timer");
var countDownDate_tadc1 = new Date("Dec 12, 2025 22:00:00").getTime();

function update_tadc1Timer() {
    var now_tadc1 = new Date().getTime();
    var distance_tadc1 = countDownDate_tadc1 - now_tadc1;

    var days_tadc1 = Math.floor(distance_tadc1 / (1000 * 60 * 60 * 24));
    var hours_tadc1 = Math.floor((distance_tadc1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes_tadc1 = Math.floor((distance_tadc1 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds_tadc1 = Math.floor((distance_tadc1 % (1000 * 60)) / 1000);

    if (distance_tadc1 < 0) {
        clearInterval(x);
        Element_tadc1.innerHTML = "EXPIRED";

    } else if (days_tadc1 < 1) {
        Element_tadc1.innerHTML = hours_tadc1 + "H " + minutes_tadc1 + "M " + seconds_tadc1 + "S";
        
    } else {
        Element_tadc1.innerHTML = days_tadc1 + "D " + hours_tadc1 + "H " + minutes_tadc1 + "M";
    }
}

update_tadc1Timer();
var x = setInterval(update_tadc1Timer, 1000);
