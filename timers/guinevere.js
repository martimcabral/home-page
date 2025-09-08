var Element_guinevere = document.getElementById("guinevere")
var countDownDate_guinevere = new Date("Sep 19, 2025 22:00:00").getTime();

function update_guinevereTimer() {
    var now_guinevere = new Date().getTime();
    var distance_guinevere = countDownDate_guinevere - now_guinevere;

    var days_guinevere = Math.floor(distance_guinevere / (1000 * 60 * 60 * 24));
    var hours_guinevere = Math.floor((distance_guinevere % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes_guinevere = Math.floor((distance_guinevere % (1000 * 60 * 60)) / (1000 * 60));
    var seconds_guinevere = Math.floor((distance_guinevere % (1000 * 60)) / 1000);

    if (distance_guinevere < 0) {
        clearInterval(x);
        Element_guinevere.innerHTML = "EXPIRED";

    } else if (days_guinevere < 1) {
        Element_guinevere.innerHTML = hours_guinevere + "H " + minutes_guinevere + "M " + seconds_guinevere + "S";
    
    } else {
        Element_guinevere.innerHTML = days_guinevere + "D " + hours_guinevere + "H " + minutes_guinevere + "M ";
    }
}

update_guinevereTimer();
var x = setInterval(update_guinevereTimer, 1000);
