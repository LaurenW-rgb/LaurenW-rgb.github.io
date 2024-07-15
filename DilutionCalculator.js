function calculateDilution() {
    var desiredConcentration = document.getElementById(
        "desiredConcentration",
    ).value;
    var desiredVolume = document.getElementById("desiredVolume").value;
    var stockConcentration =
        document.getElementById("stockConcentration").value;
    var stockVolume =
        (desiredConcentration * desiredVolume) / stockConcentration;
    document.getElementById("stockVolume").textContent = stockVolume.toFixed(1);
}
