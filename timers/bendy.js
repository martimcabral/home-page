var Element_bendy = document.getElementById("_bendytimer");
var countDownDate_bendy = new Date("Oct 9, 2025 17:00:00").getTime();

function update_bendyTimer() {
    var now_bendy = new Date().getTime();
    var distance_bendy = countDownDate_bendy - now_bendy;

    var days_bendy = Math.floor(distance_bendy / (1000 * 60 * 60 * 24));
    var hours_bendy = Math.floor((distance_bendy % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes_bendy = Math.floor((distance_bendy % (1000 * 60 * 60)) / (1000 * 60));
    var seconds_bendy = Math.floor((distance_bendy % (1000 * 60)) / 1000);

    if (distance_bendy < 0) {
        clearInterval(x);
        Element_bendy.innerHTML = "EXPIRED";

    } else if (days_bendy < 1) {
        Element_bendy.innerHTML = hours_bendy + "H " + minutes_bendy + "M " + seconds_bendy + "S";
        
    } else {
        Element_bendy.innerHTML = days_bendy + "D " + hours_bendy + "H " + minutes_bendy + "M";
    }
}

update_bendyTimer();
var x = setInterval(update_bendyTimer, 1000);
