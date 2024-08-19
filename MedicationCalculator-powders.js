"use strict";
function myFunction() {
    insertPreset();
    calculatePowderMedication();
}

function insertPreset() {
    var drugPreset = document.getElementById("drug").value;
    if ((drugPreset = "sucralfate")) {
        document.getElementById("dose").value = 20;
        document.getElementById("concentration").value = 1000;
        document.getElementById("gramsPerUnit").value = 3;
    }
    if ((drugPreset = "equisolon")) {
        document.getElementById("dose").value = 1.1;
        document.getElementById("concentration").value = 33;
        document.getElementById("gramsPerUnit").value = 4.5;
    }
}

function calculatePowderMedication() {
    var bodyWeight = document.getElementById("bodyWeight").value;
    var dose = document.getElementById("dose").value;
    var concentration = document.getElementById("concentration").value;
    var gramsPerUnit = document.getElementById("gramsPerUnit").value;

    var totalGrams = (bodyWeight * dose) / concentration;
    var scoopsOrSachets = totalGrams / gramsPerUnit;

    if (isNaN(totalGrams)) {
        document.getElementById("totalGrams").textContent = "";
    } else if (!isFinite(totalGrams)) {
        document.getElementById("totalGrams").textContent = "";
    } else {
        document.getElementById("totalGrams").textContent =
            totalGrams.toFixed(1);
    }
    if (isNaN(scoopsOrSachets)) {
        document.getElementById("scoopsOrSachets").textContent = "";
    } else if (!isFinite(scoopsOrSachets)) {
        document.getElementById("scoopsOrSachets").textContent = "";
    } else {
        document.getElementById("scoopsOrSachets").textContent =
            scoopsOrSachets.toFixed(1);
    }
}
