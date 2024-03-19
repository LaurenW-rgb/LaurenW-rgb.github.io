function calculateRate() {
    var bodyweight = document.getElementById('bodyweight').value;
    var fluidrate = document.getElementById('fluidrate').value;
    var dropsperml = document.getElementById('dropsperml').value;

    var result = (bodyweight * fluidrate * dropsperml)/86400
    if (!isNaN(result))
    {
        document.getElementById("result").textContent= "Drops per second = " + result.toFixed(2);
    }
}

