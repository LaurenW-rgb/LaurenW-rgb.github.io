"use strict";

function getConcentrationInMilligrams(rawConcentration, concentrationUnit) {
    if (concentrationUnit === "milligramsConc"){
        return rawConcentration;
    }
    else if (concentrationUnit === "microgramsConc"){
        return rawConcentration/1000;
    }
}

function getDoseUnitInMilligrams(rawDose, doseUnit) {
    if (doseUnit === "milligramsDose"){
        return rawDose;
    }
    else if (doseUnit === "microgramsDose"){
        return rawDose/1000;
    }
}

function calculateMedication() {
    var bodyWeight = document.getElementById('bodyWeight').value;

    var rawConcentration = document.getElementById('concentration').value;
    var concentrationUnit = document.getElementById('concentrationUnit').value;
    var concentrationMilligrams = getConcentrationInMilligrams(rawConcentration, concentrationUnit);

    var rawDose = document.getElementById('doseRate').value;
    var doseUnit = document.getElementById('doseUnit').value;
    var doseMilligrams = getDoseUnitInMilligrams(rawDose, doseUnit);

    var result = (bodyWeight * (doseMilligrams))/concentrationMilligrams;

    document.getElementById("result").textContent= "Volume = " + result.toFixed(1);
}