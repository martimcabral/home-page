var ElementDC = document.getElementById("dctimer");
var countDownDateDC = new Date("Aug 15, 2025 22:00:00").getTime();

function updateDCTimer() {
    var nowDC = new Date().getTime();
    var distanceDC = countDownDateDC - nowDC;

    var daysDC = Math.floor(distanceDC / (1000 * 60 * 60 * 24));
    var hoursDC = Math.floor((distanceDC % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutesDC = Math.floor((distanceDC % (1000 * 60 * 60)) / (1000 * 60));
    var secondsDC = Math.floor((distanceDC % (1000 * 60)) / 1000);

    if (distanceDC < 0) {
        clearInterval(x);
        ElementDC.innerHTML = "EXPIRED";

    } else if (daysDC < 1) {
        ElementDC.innerHTML = hoursDC + "H " + minutesDC + "M " + secondsDC + "S";
        
    } else {
        ElementDC.innerHTML = daysDC + "D " + hoursDC + "H " + minutesDC + "M";
    }
}

updateDCTimer();
var x = setInterval(updateDCTimer, 1000);
