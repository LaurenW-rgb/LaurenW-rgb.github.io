"use strict";

function calculateFeeding(e) {
    e.preventDefault();
    var bodyWeight = document.getElementById("bodyWeight").value;
    var ration = document.getElementById("ration").value;
    var feedingFrequency = document.getElementById("feedingFrequency").value;

    var totalFeed = (bodyWeight * ration) / 100;
    var perFeed = totalFeed / (24 / feedingFrequency);

    document.getElementById("totalFeed").textContent = totalFeed.toFixed(0);
    document.getElementById("perFeed").textContent = perFeed.toFixed(3);
}
