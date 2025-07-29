var Element = document.getElementById("18timer");
var countDownDate = new Date("Sep 24, 2025 00:00:00").getTime();

function update18Timer() {
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

update18Timer();
var x = setInterval(update18Timer, 1000);
