var Element_tadc2 = document.getElementById("_tadc2timer");
var countDownDate_tadc2 = new Date("Mar 20, 2026 22:00:00").getTime();

function update_tadc2Timer() {
    var now_tadc2 = new Date().getTime();
    var distance_tadc2 = countDownDate_tadc2 - now_tadc2;

    var days_tadc2 = Math.floor(distance_tadc2 / (1000 * 60 * 60 * 24));
    var hours_tadc2 = Math.floor((distance_tadc2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes_tadc2 = Math.floor((distance_tadc2 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds_tadc2 = Math.floor((distance_tadc2 % (1000 * 60)) / 1000);

    if (distance_tadc2 < 0) {
        clearInterval(x);
        Element_tadc2.innerHTML = "EXPIRED";

    } else if (days_tadc2 < 1) {
        Element_tadc2.innerHTML = hours_tadc2 + "H " + minutes_tadc2 + "M " + seconds_tadc2 + "S";
        
    } else {
        Element_tadc2.innerHTML = days_tadc2 + "D " + hours_tadc2 + "H " + minutes_tadc2 + "M";
    }
}

update_tadc2Timer();
var x = setInterval(update_tadc2Timer, 1000);
