"use strict";

function calculateLidocaineRates(bodyWeight, concentration) {
    var bodyWeight = document.getElementById("bodyWeight").value;
    var concentration = document.getElementById("concentration").value;

    var lidocaineBolusVolume = (bodyWeight * 1.3) / concentration;
    var lidocaineBolusRate = lidocaineBolusVolume * 4;

    document.getElementById("lidocaineBolusVolume").textContent =
        "Lidocaine bolus volume (ml) = " + lidocaineBolusVolume.toFixed(1);
    document.getElementById("lidocaineBolusRate").textContent =
        "Lidocaine bolus rate (ml/h) = " + lidocaineBolusRate.toFixed(1);

    var lidocaineCRIRate = (bodyWeight * 3) / concentration;
    document.getElementById("lidocaineCRIRate").textContent =
        "Lidocaine CRI rate (ml/h) = " + lidocaineCRIRate.toFixed(1);
}
