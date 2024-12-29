function calculateDilution(e) {
    e.preventDefault();
    var desiredConcentration = document.getElementById(
        "desiredConcentration",
    ).value;
    var desiredVolume = document.getElementById("desiredVolume").value;
    var stockConcentration =
        document.getElementById("stockConcentration").value;
    var stockVolume =
        (desiredConcentration * desiredVolume) / stockConcentration;

    if (isNaN(stockVolume)) {
        document.getElementById("stockConcentration").textContent = "0.0";
    } else if (!isFinite(stockVolume)) {
        document.getElementById("stockConcentration").textContent = "0.0";
    } else {
        document.getElementById("stockVolume").textContent =
            stockVolume.toFixed(1);
    }
}
