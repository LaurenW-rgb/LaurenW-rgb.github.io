function calculateFluidRate() {
    var bodyWeight = document.getElementById("bodyWeight").value;
    var fluidRate = document.getElementById("fluidRate").value;
    var dropsPerMl = document.getElementById("dropsPerMl").value;
    var litresPerHour = (bodyWeight * fluidRate) / 24000;
    var dropsPerSecond = (bodyWeight * fluidRate * dropsPerMl) / 86400;
    document.getElementById("litresPerHour").textContent =
        "Litres per hour = " + litresPerHour.toFixed(2);
    document.getElementById("dropsPerSecond").textContent =
        "Drops per second = " + dropsPerSecond.toFixed(2);
}
