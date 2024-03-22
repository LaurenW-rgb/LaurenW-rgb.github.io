function calculateCRIRate() {
    var bodyWeight = document.getElementById('bodyWeight').value;
    var CRIRate = document.getElementById('CRIRate').value;
    var concentration = document.getElementById('concentration').value;

    var doseUnit = document.getElementById('doseUnit').value;
    var doseDuration = document.getElementById('doseDuration').value;
    var concentrationUnit = document.getElementById('concentrationUnit').value;

    if (concentrationUnit === "milligramsConc"){
        var result = (bodyWeight * CRIRate)/concentration;
    } else if (concentrationUnit === "microgramsConc"){
        var result = (bodyWeight * CRIRate)/(concentration/1000);
    };

    document.getElementById("result").textContent= "ml/h = " + result.toFixed(1);
}