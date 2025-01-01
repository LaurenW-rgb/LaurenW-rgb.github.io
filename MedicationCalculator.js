"use strict";

function setPageUnits(e){
    e.preventDefault();

    var formulation = document.getElementById("formulation").value;
    var milligramsConcSolution = document.getElementById("milligramsConcSolution");
    var microgramsConcSolution = document.getElementById("microgramsConcSolution");
    var milligramsConcSachet = document.getElementById("milligramsConcSachet");
    var microgramsConcSachet = document.getElementById("microgramsConcSachet");
    var milligramsConcTub = document.getElementById("milligramsConcTub");
    var microgramsConcTub = document.getElementById("microgramsConcTub");
    var blank = document.getElementById("blank");

    if (formulation === "solution") {
        milligramsConcSolution.style.display = "block";
        microgramsConcSolution.style.display = "block";
        milligramsConcSachet.style.display = "none";
        microgramsConcSachet.style.display = "none";
        milligramsConcTub.style.display = "none";
        microgramsConcTub.style.display = "none";
        blank.style.display = "none";
        document.getElementById("resultsSuffixID").textContent = "ml";
    } else if (formulation === "sachets") {
        milligramsConcSolution.style.display = "none";
        microgramsConcSolution.style.display = "none";
        milligramsConcSachet.style.display = "block";
        microgramsConcSachet.style.display = "block";
        milligramsConcTub.style.display = "none";
        microgramsConcTub.style.display = "none";
        blank.style.display = "none";
        document.getElementById("resultsSuffixID").textContent = "sachets";
    } else if (formulation === "tubs") {
        milligramsConcSolution.style.display = "none";
        microgramsConcSolution.style.display = "none";
        milligramsConcSachet.style.display = "none";
        microgramsConcSachet.style.display = "none";
        milligramsConcTub.style.display = "block";
        microgramsConcTub.style.display = "block";
        blank.style.display = "none";
        document.getElementById("resultsSuffixID").textContent = "scoops";
    } else if (formulation === "select") {
        milligramsConcSolution.style.display = "none";
        microgramsConcSolution.style.display = "none";
        milligramsConcSachet.style.display = "none";
        microgramsConcSachet.style.display = "none";
        milligramsConcTub.style.display = "none";
        microgramsConcTub.style.display = "none";
        blank.style.display = "block";
        document.getElementById("resultsSuffixID").textContent = "";
    }
}

function getConcentrationInMilligrams(rawConcentration, concentrationUnit) {
    if (concentrationUnit === "milligramsConcSolution" || concentrationUnit === "milligramsConcSachet" || concentrationUnit === "milligramsConcTub") {
        return rawConcentration * 1;
    } else if (concentrationUnit === "microgramsConcSolution" || concentrationUnit === "microgramsConcSachet" || concentrationUnit === "microgramsConcTub") {
        return rawConcentration / 1000;
    }
}

// todo update concentration units as now depends on whether solution/sachet/tub

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

    var result = (bodyWeight * doseMilligrams) / concentrationMilligrams;

    if (isNaN(result)) {
        document.getElementById("result").textContent = "error";
    } else if (!isFinite(result)) {
        document.getElementById("result").textContent = "error";
    } else {
        document.getElementById("result").textContent = result.toFixed(1);
    }
}
