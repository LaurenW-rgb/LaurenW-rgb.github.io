function calculateFluidRate() {
    var bodyWeight = document.getElementById('bodyWeight').value;
    var fluidRate = document.getElementById('fluidRate').value;
    var dropsPerMl = document.getElementById('dropsPerMl').value;
    var dropsPerSecond = (bodyWeight * fluidRate * dropsPerMl)/86400
    document.getElementById("dropsPerSecond").textContent= "Drops per second = " + dropsPerSecond.toFixed(2);
}