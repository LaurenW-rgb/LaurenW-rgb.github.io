"use strict";

function calculateFeeding(){
    var bodyWeight = document.getElementById('bodyWeight').value;
    var ration = document.getElementById('ration').value;
    var feedingFrequency = document.getElementById('feedingFrequency').value;

    var totalFeed = (bodyWeight*ration)/100;
    var perFeed = totalFeed/(24/feedingFrequency);

    document.getElementById("totalFeed").textContent= "Total over 24h = " + totalFeed + "kg";
    document.getElementById("perFeed").textContent= "Amount per feed = " + perFeed.toFixed(1) + "kg";
};