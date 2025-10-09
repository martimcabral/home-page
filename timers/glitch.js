var Element_glitch = document.getElementById("_glitchtimer");
var countDownDate_glitch = new Date("Oct 10, 2025 19:00:00").getTime();

function update_glitchTimer() {
    var now_glitch = new Date().getTime();
    var distance_glitch = countDownDate_glitch - now_glitch;

    var days_glitch = Math.floor(distance_glitch / (1000 * 60 * 60 * 24));
    var hours_glitch = Math.floor((distance_glitch % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes_glitch = Math.floor((distance_glitch % (1000 * 60 * 60)) / (1000 * 60));
    var seconds_glitch = Math.floor((distance_glitch % (1000 * 60)) / 1000);

    if (distance_glitch < 0) {
        clearInterval(x);
        Element_glitch.innerHTML = "EXPIRED";

    } else if (days_glitch < 1) {
        Element_glitch.innerHTML = hours_glitch + "H " + minutes_glitch + "M " + seconds_glitch + "S";
        
    } else {
        Element_glitch.innerHTML = days_glitch + "D " + hours_glitch + "H " + minutes_glitch + "M";
    }
}

update_glitchTimer();
var x = setInterval(update_glitchTimer, 1000);
