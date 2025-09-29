var Element_yapyap = document.getElementById("_yapyaptimer");
var countDownDate_yapyap = new Date("Oct 13, 2025 17:00:00").getTime();

function update_yapyapTimer() {
    var now_yapyap = new Date().getTime();
    var distance_yapyap = countDownDate_yapyap - now_yapyap;

    var days_yapyap = Math.floor(distance_yapyap / (1000 * 60 * 60 * 24));
    var hours_yapyap = Math.floor((distance_yapyap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes_yapyap = Math.floor((distance_yapyap % (1000 * 60 * 60)) / (1000 * 60));
    var seconds_yapyap = Math.floor((distance_yapyap % (1000 * 60)) / 1000);

    if (distance_yapyap < 0) {
        clearInterval(x);
        Element_yapyap.innerHTML = "EXPIRED";

    } else if (days_yapyap < 1) {
        Element_yapyap.innerHTML = hours_yapyap + "H " + minutes_yapyap + "M " + seconds_yapyap + "S";
        
    } else {
        Element_yapyap.innerHTML = days_yapyap + "D " + hours_yapyap + "H " + minutes_yapyap + "M";
    }
}

update_yapyapTimer();
var x = setInterval(update_yapyapTimer, 1000);
