function calculateFluidRate() {
    var bodyWeight = document.getElementById("bodyWeight").value;
    var fluidRate = document.getElementById("fluidRate").value;
    var dropsPerMl = document.getElementById("dropsPerMl").value;
    var litresPerHour = (bodyWeight * fluidRate) / 24000;
    var dropsPerSecond = (bodyWeight * fluidRate * dropsPerMl) / 86400;
    document.getElementById("litresPerHour").textContent =
        litresPerHour.toFixed(1);
    document.getElementById("dropsPerSecond").textContent =
        dropsPerSecond.toFixed(1);
}
