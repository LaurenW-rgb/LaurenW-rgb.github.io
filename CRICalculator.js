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

function getDoseDurationInMilligramsPerHour(doseMilligrams, doseDuration) {
    if (doseDuration === "hour"){
        return doseMilligrams;
    } else if (doseDuration === "minute"){
        return doseMilligrams*60;
    } else if (doseDuration === "second"){
        return doseMilligrams*3600;
    }
}

function calculateCRIRate() {
    var bodyWeight = document.getElementById('bodyWeight').value;

    var rawConcentration = document.getElementById('concentration').value;
    var concentrationUnit = document.getElementById('concentrationUnit').value;
    var concentrationMilligrams = getConcentrationInMilligrams(rawConcentration, concentrationUnit);

    var rawDose = document.getElementById('doseRate').value;
    var doseUnit = document.getElementById('doseUnit').value;
    var doseDuration = document.getElementById('doseDuration').value;
    var doseMilligrams = getDoseUnitInMilligrams(rawDose, doseUnit);
    var doseMilligramsPerHour = getDoseDurationInMilligramsPerHour(doseMilligrams, doseDuration);

    var result = (bodyWeight * (doseMilligramsPerHour))/concentrationMilligrams;

    document.getElementById("result").textContent= "ml/h = " + result.toFixed(1);
}