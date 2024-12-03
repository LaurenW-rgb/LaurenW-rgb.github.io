function calculateFluidRate(e) {
    e.preventDefault();

    var bodyWeight = document.getElementById("bodyWeight").value;
    var fluidRate = document.getElementById("fluidRate").value;
    var dropsPerMl = document.getElementById("dropsPerMl").value;
    var litresLeft = document.getElementById("litresLeft").value;

    var litresPerHour = (bodyWeight * fluidRate) / 24000;
    var dropsPerSecond = (bodyWeight * fluidRate * dropsPerMl) / 86400;
    var timeLeft = litresLeft / litresPerHour;

    document.getElementById("litresPerHour").textContent =
        litresPerHour.toFixed(1);
    document.getElementById("dropsPerSecond").textContent =
        dropsPerSecond.toFixed(1);

    // if (isNaN(timeLeft)) {
    //     document.getElementById("timeLeft").textContent = "-";
    // } else if (!isFinite(timeLeft)) {
    //     document.getElementById("timeLeft").textContent = "-";
    // } else
        document.getElementById("timeLeft").textContent = timeLeft.toFixed(1);

        console.log("hello");
}
