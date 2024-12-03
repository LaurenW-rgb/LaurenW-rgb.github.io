"use strict";
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

// function displayResults() {
//     var resultsTable = document.getElementById("resultsTable");
//     resultsTable.hidden = false;
// }

function calculateMedication(e) {
    e.preventDefault();
    var bodyweight = document.getElementById("bodyweight").value;

    var rawConcentration = document.getElementById("concentration").value;
    var concentrationUnit = document.getElementById("concentrationUnit").value;
    var concentrationMilligrams = getConcentrationInMilligrams(
        rawConcentration,
        concentrationUnit,
    );

    var rawDose = document.getElementById("dose").value;
    var doseUnit = document.getElementById("doseUnit").value;
    var doseMilligrams = getDoseUnitInMilligrams(rawDose, doseUnit);

    var result = (bodyweight * doseMilligrams) / concentrationMilligrams;
    if (isNaN(result)) {
        document.getElementById("result").textContent = "Error";
    } else if (!isFinite(result)) {
        document.getElementById("result").textContent = "Error";
    } else {
        document.getElementById("result").textContent =
            result.toFixed(1) + "ml";
    }
}
