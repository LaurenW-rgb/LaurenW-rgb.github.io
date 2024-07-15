"use strict";

function calculateLidocaineRates(bodyWeight, concentration) {
    var bodyWeight = document.getElementById("bodyWeight").value;
    var concentration = document.getElementById("concentration").value;

    var lidocaineBolusVolume = (bodyWeight * 1.3) / concentration;
    var lidocaineBolusRate = lidocaineBolusVolume * 4;

    if (isNaN(lidocaineBolusVolume)) {
        document.getElementById("lidocaineBolusVolume").textContent = "0.0";
    } else if (!isFinite(lidocaineBolusVolume)) {
        document.getElementById("lidocaineBolusVolume").textContent = "0.0";
    } else {
        document.getElementById("lidocaineBolusVolume").textContent =
            lidocaineBolusVolume.toFixed(1);
    }

    if (isNaN(lidocaineBolusRate)) {
        document.getElementById("lidocaineBolusRate").textContent = "0.0";
    } else if (!isFinite(lidocaineBolusRate)) {
        document.getElementById("lidocaineBolusRate").textContent = "0.0";
    } else {
        document.getElementById("lidocaineBolusRate").textContent =
            lidocaineBolusRate.toFixed(1);
    }

    var lidocaineCRIRate = (bodyWeight * 3) / concentration;

    if (isNaN(lidocaineCRIRate)) {
        document.getElementById("lidocaineCRIRate").textContent = "0.0";
    } else if (!isFinite(lidocaineCRIRate)) {
        document.getElementById("lidocaineCRIRate").textContent = "0.0";
    } else {
        document.getElementById("lidocaineCRIRate").textContent =
            lidocaineCRIRate.toFixed(1);
    }
}
