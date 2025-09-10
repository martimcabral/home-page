var ElementMinecraft = document.getElementById("Minecrafttimer")
var countDownDateMinecraft = new Date("Sep 27, 2025 17:00:00").getTime();

function updateMinecraftTimer() {
    var nowMinecraft = new Date().getTime();
    var distanceMinecraft = countDownDateMinecraft - nowMinecraft;

    var daysMinecraft = Math.floor(distanceMinecraft / (1000 * 60 * 60 * 24));
    var hoursMinecraft = Math.floor((distanceMinecraft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutesMinecraft = Math.floor((distanceMinecraft % (1000 * 60 * 60)) / (1000 * 60));
    var secondsMinecraft = Math.floor((distanceMinecraft % (1000 * 60)) / 1000);

    if (distanceMinecraft < 0) {
        clearInterval(x);
        ElementMinecraft.innerHTML = "EXPIRED";

    } else if (daysMinecraft < 1) {
        ElementMinecraft.innerHTML = hoursMinecraft + "H " + minutesMinecraft + "M " + secondsMinecraft + "S";

    } else {
        ElementMinecraft.innerHTML = daysMinecraft + "D " + hoursMinecraft + "H " + minutesMinecraft + "M";
    }
}

updateMinecraftTimer();
var x = setInterval(updateMinecraftTimer, 1000);
