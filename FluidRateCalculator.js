function getFluidRateInMls(fluidRate, fluidRateID){
    if (fluidRateID === "ml/kg/day"){
        return fluidRate *1;
    } else if (fluidRateID === "maintenance"){
        return fluidRate * 60 ;
    }
}

function calculateFluidRate(e) {
    e.preventDefault();
    var fluidRate = document.getElementById("fluidRate").value;
    var fluidRateID = document.getElementById("fluidRateID").value;
    var bodyWeight = document.getElementById("bodyWeight").value;
    var fluidRateInMls = getFluidRateInMls(fluidRate, fluidRateID);
    var dropsPerMl = document.getElementById("dropsPerMl").value;
    var litresLeft = document.getElementById("litresLeft").value;

    var litresPerHour = (bodyWeight * fluidRateInMls) / 24000;
    var dropsPerSecond = (bodyWeight * fluidRateInMls * dropsPerMl) / 86400;
    var timeLeft = litresLeft / litresPerHour;

    document.getElementById("litresPerHour").textContent =
        litresPerHour.toFixed(1);
    document.getElementById("dropsPerSecond").textContent =
        dropsPerSecond.toFixed(1);
    document.getElementById("timeLeft").textContent = timeLeft.toFixed(1);
}
