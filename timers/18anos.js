var Element18 = document.getElementById("18timer");
var countDownDate18 = new Date("Sep 24, 2025 00:00:00").getTime();

function update18Timer() {
    var now18 = new Date().getTime();
    var distance18 = countDownDate18 - now18;

    var days18 = Math.floor(distance18 / (1000 * 60 * 60 * 24));
    var hours18 = Math.floor((distance18 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes18 = Math.floor((distance18 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds18 = Math.floor((distance18 % (1000 * 60)) / 1000);

    if (distance18 < 0) {
        clearInterval(x);
        Element18.innerHTML = "EXPIRED";

    } else if (days18 < 1) {
        Element18.innerHTML = hours18 + "H " + minutes18 + "M " + seconds18 + "S";
        
    } else {
        Element18.innerHTML = days18 + "D " + hours18 + "H " + minutes18 + "M";
    }
}

update18Timer();
var x = setInterval(update18Timer, 1000);
