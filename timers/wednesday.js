var Element_WED = document.getElementById("_WEDtimer");
var countDownDate_WED = new Date("Sep 3, 2025 08:00:00").getTime();

function update_WEDTimer() {
    var now_WED = new Date().getTime();
    var distance_WED = countDownDate_WED - now_WED;

    var days_WED = Math.floor(distance_WED / (1000 * 60 * 60 * 24));
    var hours_WED = Math.floor((distance_WED % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes_WED = Math.floor((distance_WED % (1000 * 60 * 60)) / (1000 * 60));
    var seconds_WED = Math.floor((distance_WED % (1000 * 60)) / 1000);

    if (distance_WED < 0) {
        clearInterval(x);
        Element_WED.innerHTML = "EXPIRED";
    } else {
        Element_WED.innerHTML = days_WED + "D " + hours_WED + "H " + minutes_WED + "M " + seconds_WED + "S ";
    }
}

update_WEDTimer();
var x = setInterval(update_WEDTimer, 1000);
