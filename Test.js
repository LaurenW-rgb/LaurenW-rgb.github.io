"use strict";

function calculateMedication(e) {
    e.preventDefault();
    var bodyweight = document.getElementById("bodyweight").value;
    var concentration = document.getElementById("concentration").value;
    var dose = document.getElementById("dose").value;

    var result = (bodyweight * dose) / concentration;
    if (isNaN(result)) {
        document.getElementById("result").textContent = "Error";
    } else if (!isFinite(result)) {
        document.getElementById("result").textContent = "Error";
    } else {
        document.getElementById("result").textContent =
            result.toFixed(1) + "ml";
    }
}
