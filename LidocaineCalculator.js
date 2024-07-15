"use strict";

function calculateLidocaineRates(bodyWeight, concentration) {
    var bodyWeight = document.getElementById("bodyWeight").value;
    var concentration = document.getElementById("concentration").value;

    var lidocaineBolusVolume = (bodyWeight * 1.3) / concentration;
    var lidocaineBolusRate = lidocaineBolusVolume * 4;

    document.getElementById("lidocaineBolusVolume").textContent =
        lidocaineBolusVolume.toFixed(1);
    document.getElementById("lidocaineBolusRate").textContent =
        lidocaineBolusRate.toFixed(1);

    var lidocaineCRIRate = (bodyWeight * 3) / concentration;
    document.getElementById("lidocaineCRIRate").textContent =
        lidocaineCRIRate.toFixed(1);
}
