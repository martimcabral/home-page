var Element = document.getElementById("hbtimer")
var countDownDate = new Date("Sep 10, 2025 00:00:00").getTime();

function updateHBTimer() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    Element.innerHTML = days + "D " + hours + "H "
        + minutes + "M " + seconds + "S ";

    if (distance < 0) {
        clearInterval(x);
        Element.innerHTML = "EXPIRED";
    }
}

updateHBTimer();
var x = setInterval(updateHBTimer, 1000);
