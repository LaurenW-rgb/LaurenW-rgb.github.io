"use strict";
function myFunction() {
    insertPreset();
    calculatePowderMedication();
}

function insertPreset() {
    if (document.getElementById("drug").value === "sucralfate") {
        document.getElementById("dose").value = 20;
        document.getElementById("concentration").value = 1000;
        document.getElementById("gramsPerUnit").value = 3;
    } else if (document.getElementById("drug").value === "equisolon") {
        document.getElementById("dose").value = 1.1;
        document.getElementById("concentration").value = 33;
        document.getElementById("gramsPerUnit").value = 4.5;
    }
}

function getConcentrationInMilligrams(rawConcentration, concentrationUnit) {
    if (concentrationUnit === "milligramsConc") {
        return rawConcentration * 1;
    } else if (concentrationUnit === "microgramsConc") {
        return rawConcentration / 1000;
    }
}

function getDoseUnitInMilligrams(rawDose, doseUnit) {
    if (doseUnit === "milligramsDose") {
        return rawDose * 1;
    } else if (doseUnit === "microgramsDose") {
        return rawDose / 1000;
    }
}

function calculatePowderMedication() {
    var bodyWeight = document.getElementById("bodyWeight").value;
    var gramsPerUnit = document.getElementById("gramsPerUnit").value;

    var rawConcentration = document.getElementById("concentration").value;
    var concentrationUnit = document.getElementById("concentrationUnit").value;
    var concentrationMilligrams = getConcentrationInMilligrams(
        rawConcentration,
        concentrationUnit,
    );

    var rawDose = document.getElementById("dose").value;
    var doseUnit = document.getElementById("doseUnit").value;
    var doseMilligrams = getDoseUnitInMilligrams(rawDose, doseUnit);

    var totalGrams = (bodyWeight * doseMilligrams) / concentrationMilligrams;
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
