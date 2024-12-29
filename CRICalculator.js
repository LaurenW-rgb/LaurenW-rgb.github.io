"use strict";

function getConcentrationInMilligrams(rawConcentration, concentrationUnit) {
    if (concentrationUnit === "milligramsConc") {
        return rawConcentration;
    } else if (concentrationUnit === "microgramsConc") {
        return rawConcentration / 1000;
    }
}

function getRateInMilligramsPerHour(rawDose, doseRateUnit) {
    if (doseRateUnit === "mg/kg/h") {
        return rawDose;
    } else if (doseRateUnit === "mg/kg/min") {
        return rawDose * 60;
    } else if (doseRateUnit === "ug/kg/h") {
        return rawDose / 1000;
    } else if (doseRateUnit === "ug/kg/min") {
        return rawDose * 0.006;
    }
}

function calculateCRIRate(e) {
    e.preventDefault();
    var bodyWeight = document.getElementById("bodyWeight").value;

    var rawConcentration = document.getElementById("concentration").value;
    var concentrationUnit = document.getElementById("concentrationUnit").value;
    var concentrationMilligrams = getConcentrationInMilligrams(
        rawConcentration,
        concentrationUnit,
    );

    var rawDose = document.getElementById("doseRate").value;
    var doseRateUnit = document.getElementById("doseRateUnit").value;
    var rateMilligramsPerHour = getRateInMilligramsPerHour(rawDose, doseRateUnit);

    var result = (bodyWeight * rateMilligramsPerHour) / concentrationMilligrams;
    document.getElementById("result").textContent = result.toFixed(1);
}
