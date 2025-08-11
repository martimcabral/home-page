var Element_kingmakers = document.getElementById("_kingmakerstimer");
var countDownDate_kingmakers = new Date("Oct 8, 2025 17:00:00").getTime();

function update_kingmakersTimer() {
    var now_kingmakers = new Date().getTime();
    var distance_kingmakers = countDownDate_kingmakers - now_kingmakers;

    var days_kingmakers = Math.floor(distance_kingmakers / (1000 * 60 * 60 * 24));
    var hours_kingmakers = Math.floor((distance_kingmakers % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes_kingmakers = Math.floor((distance_kingmakers % (1000 * 60 * 60)) / (1000 * 60));
    var seconds_kingmakers = Math.floor((distance_kingmakers % (1000 * 60)) / 1000);

    if (distance_kingmakers < 0) {
        clearInterval(x);
        Element_kingmakers.innerHTML = "EXPIRED";

    } else if (days_kingmakers < 1) {
        Element_kingmakers.innerHTML = hours_kingmakers + "H " + minutes_kingmakers + "M " + seconds_kingmakers + "S";
        
    } else {
        Element_kingmakers.innerHTML = days_kingmakers + "D " + hours_kingmakers + "H " + minutes_kingmakers + "M";
    }
}

update_kingmakersTimer();
var x = setInterval(update_kingmakersTimer, 1000);
