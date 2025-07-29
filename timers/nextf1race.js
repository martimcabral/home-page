var Element = document.getElementById("f1timer");
var countDownDate = new Date("Aug 3, 2025 13:00:00").getTime();

function updateF1Timer() {
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

updateF1Timer();
var x = setInterval(updateF1Timer, 1000);
