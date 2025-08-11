var Element_re = document.getElementById("_retimer");
var countDownDate_re = new Date("Feb 27, 2026 00:00:00").getTime();

function update_reTimer() {
    var now_re = new Date().getTime();
    var distance_re = countDownDate_re - now_re;

    var days_re = Math.floor(distance_re / (1000 * 60 * 60 * 24));
    var hours_re = Math.floor((distance_re % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes_re = Math.floor((distance_re % (1000 * 60 * 60)) / (1000 * 60));
    var seconds_re = Math.floor((distance_re % (1000 * 60)) / 1000);

    if (distance_re < 0) {
        clearInterval(x);
        Element_re.innerHTML = "EXPIRED";

    } else if (days_re < 1) {
        Element_re.innerHTML = hours_re + "H " + minutes_re + "M " + seconds_re + "S";
        
    } else {
        Element_re.innerHTML = days_re + "D " + hours_re + "H " + minutes_re + "M";
    }
}

update_reTimer();
var x = setInterval(update_reTimer, 1000);
