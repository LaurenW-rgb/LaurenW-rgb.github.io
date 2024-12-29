"use strict";

function calculateLidocaineRates(e) {
    e.preventDefault();
    var bodyWeight = document.getElementById("bodyWeight").value;
    var concentration = document.getElementById("concentration").value;

    var lidocaineBolusVolume = (bodyWeight * 1.3) / concentration;
    var lidocaineBolusRate = lidocaineBolusVolume * 4;
    var lidocaineCRIRate = (bodyWeight * 3) / concentration;

document.getElementById("lidocaineBolusVolume").textContent =
            lidocaineBolusVolume.toFixed(1);
document.getElementById("lidocaineBolusRate").textContent =
            lidocaineBolusRate.toFixed(1);
document.getElementById("lidocaineCRIRate").textContent =
            lidocaineCRIRate.toFixed(1);
}
