"use strict";

function calculatePowderMedication() {
    var bodyWeight = document.getElementById("bodyWeight").value;
    var dose = document.getElementById("dose").value;
    var concentration = document.getElementById("concentration").value;
    var gramsPerUnit = document.getElementById("gramsPerUnit").value;

    var totalGrams = (bodyWeight * dose) / concentration;
    var scoopsOrSachets = totalGrams / gramsPerUnit;

    if (isNaN(totalGrams)) {
        document.getElementById("totalGrams").textContent = "0.0";
    } else if (!isFinite(totalGrams)) {
        document.getElementById("totalGrams").textContent = "0.0";
    } else {
        document.getElementById("totalGrams").textContent =
            totalGrams.toFixed(1);
    }

    if (isNaN(scoopsOrSachets)) {
        document.getElementById("scoopsOrSachets").textContent = "0.0";
    } else if (!isFinite(scoopsOrSachets)) {
        document.getElementById("scoopsOrSachets").textContent = "0.0";
    } else {
        document.getElementById("scoopsOrSachets").textContent =
            scoopsOrSachets.toFixed(1);
    }
}
