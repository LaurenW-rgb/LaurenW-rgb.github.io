function calculateCRIRate() {
    var bodyWeight = document.getElementById('bodyWeight').value;
    var CRIRate = document.getElementById('CRIRate').value;
    var concentration = document.getElementById('concentration').value;
    var result = (bodyWeight * CRIRate)/concentration
    document.getElementById("result").textContent= "ml/h = " + result.toFixed(1);
}