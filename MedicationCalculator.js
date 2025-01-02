"use strict";

function setPageUnits(e){
    e.preventDefault();

    var formulation = document.getElementById("formulation").value;
    var microgramsConc = document.getElementById("microgramsConc");
    var scoopGrams = document.getElementById("scoopGrams");

    if (formulation === "solution") {
        document.getElementById("milligramsConc").textContent = "mg/ml"
        document.getElementById("microgramsConc").textContent = "ug/ml"
        document.getElementById("resultsSuffixID").textContent = "ml";
        scoopGrams.hidden = true;
        microgramsConc.hidden = false;
    } else if (formulation === "sachets") {
        document.getElementById("milligramsConc").textContent = "mg/sachet"
        document.getElementById("microgramsConc").textContent = "ug/sachet"
        document.getElementById("resultsSuffixID").textContent = "sachets";
        scoopGrams.hidden = true;
        microgramsConc.hidden = false;
    } else if (formulation === "tubs") {
        document.getElementById("milligramsConc").textContent = "mg/g"
        document.getElementById("microgramsConc").textContent = "ug/g"
        document.getElementById("resultsSuffixID").textContent = "scoops";
        scoopGrams.hidden = false;
        microgramsConc.hidden = false;
    } else if (formulation === "select") {
        document.getElementById("bodyWeight").value = "0";
        document.getElementById("dose").value = "0";
        document.getElementById("concentration").value = "0";
        document.getElementById("result").textContent = "0";
        document.getElementById("milligramsConc").textContent = ""
        document.getElementById("resultsSuffixID").textContent = "";
        scoopGrams.hidden = true;
        microgramsConc.hidden = true;
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

function calculateMedication(e) {
    e.preventDefault();
    var bodyWeight = document.getElementById("bodyWeight").value;

    var rawConcentration = document.getElementById("concentration").value;
    var concentrationUnit = document.getElementById("concentrationUnit").value;
    var concentrationMilligrams = getConcentrationInMilligrams(
        rawConcentration,
        concentrationUnit,
    );

    var rawDose = document.getElementById("dose").value;
    var doseUnit = document.getElementById("doseUnit").value;
    var doseMilligrams = getDoseUnitInMilligrams(rawDose, doseUnit);

    var gramsPerScoop = document.getElementById("gramsPerScoop").value;

    var formulation = document.getElementById("formulation").value;
    if (formulation === "solution" || formulation === "sachets") {
        var result = (bodyWeight * doseMilligrams) / (concentrationMilligrams);
    } else if (formulation === "tubs") {
        result = (bodyWeight * doseMilligrams) / (concentrationMilligrams * gramsPerScoop);
    }


    if (isNaN(result)) {
        document.getElementById("result").textContent = "error";
    } else if (!isFinite(result)) {
        document.getElementById("result").textContent = "error";
    } else {
        document.getElementById("result").textContent = result.toFixed(1);
    }
}
