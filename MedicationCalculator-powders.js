"use strict";

function calculatePowderMedication() {
    var bodyWeight = document.getElementById("bodyWeight").value;
    var dose = document.getElementById("dose").value;
    var concentration = document.getElementById("concentration").value;
    var gramsPerUnit = document.getElementById("gramsPerUnit").value;

    var totalGrams = (bodyWeight * dose) / concentration;
    var scoopsOrSachets = totalGrams / gramsPerUnit;

    document.getElementById("totalGrams").textContent = totalGrams.toFixed(1);
    document.getElementById("scoopsOrSachets").textContent =
        scoopsOrSachets.toFixed(1);
}
