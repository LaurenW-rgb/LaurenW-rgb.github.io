function calculateFluidRate() {
    var bodyWeight = document.getElementById('bodyWeight').value;
    var fluidrate = document.getElementById('fluidRate').value;
    var dropsperml = document.getElementById('dropsPerMl').value;
    var result = (bodyWeight * fluidrate * dropsperml)/86400
    document.getElementById("result").textContent= "Drops per second = " + result.toFixed(2);
}