function setPageUnits(e){
    e.preventDefault();

    var tubGrams = document.getElementById("tubGrams");
    var tubResult = document.getElementById("tubResult");

    var prescriptionType = document.getElementById("prescriptionType").value;
    if (prescriptionType === "sachets"){
        document.getElementById("firstSuffixID").textContent = "sachets";
        document.getElementById("secondSuffixID").textContent = "sachets";
        document.getElementById("thirdSuffixID").textContent = "sachets";
        document.getElementById("resultsSuffixID").textContent = "sachets";
        tubGrams.style.display = "none";
        tubResult.style.display = "none";
    } else if (prescriptionType === "tubs"){
        document.getElementById("firstSuffixID").textContent = "scoops";
        document.getElementById("secondSuffixID").textContent = "scoops";
        document.getElementById("thirdSuffixID").textContent = "scoops";
        document.getElementById("resultsSuffixID").textContent = "scoops";
        tubGrams.style.display = "table-row";
        tubResult.style.display = "table-row";
    }
    else if (prescriptionType === "select"){
        document.getElementById("firstSuffixID").textContent = "";
        document.getElementById("secondSuffixID").textContent = "";
        document.getElementById("thirdSuffixID").textContent = "";
        document.getElementById("resultsSuffixID").textContent = "";
        tubGrams.style.display = "none";
        tubResult.style.display = "none";
    }
}


function getFirstAmountInDays(firstAmount, firstDuration, firstDurationUnit) {
    if (firstDurationUnit === "durationDays") {
        return firstAmount * firstDuration;
    } else if (firstDurationUnit === "durationWeeks") {
        return firstAmount * firstDuration * 7;
    }
}

function getSecondAmountInDays(
    secondAmount,
    secondDuration,
    secondDurationUnit,
) {
    if (secondDurationUnit === "durationDays") {
        return secondAmount * secondDuration;
    } else if (secondDurationUnit === "durationWeeks") {
        return secondAmount * secondDuration * 7;
    }
}

function getThirdAmountInDays(thirdAmount, thirdDuration, thirdDurationUnit) {
    if (thirdDurationUnit === "durationDays") {
        return thirdAmount * thirdDuration;
    } else if (thirdDurationUnit === "durationWeeks") {
        return thirdAmount * thirdDuration * 7;
    }
}

function calculatePrescription(e) {
    e.preventDefault();
    var firstAmount = document.getElementById("firstAmount").value;
    var firstDuration = document.getElementById("firstDuration").value;
    var firstDurationUnit = document.getElementById("firstDurationUnit").value;
    var secondAmount = document.getElementById("secondAmount").value;
    var secondDuration = document.getElementById("secondDuration").value;
    var secondDurationUnit =
        document.getElementById("secondDurationUnit").value;
    var thirdAmount = document.getElementById("thirdAmount").value;
    var thirdDuration = document.getElementById("thirdDuration").value;
    var thirdDurationUnit = document.getElementById("thirdDurationUnit").value;
    var gramsPerTub = document.getElementById("gramsPerTub").value;
    var gramsPerScoop = document.getElementById("gramsPerScoop").value;

    var firstAmountInDays = getFirstAmountInDays(
        firstAmount,
        firstDuration,
        firstDurationUnit,
    );
    var secondAmountInDays = getSecondAmountInDays(
        secondAmount,
        secondDuration,
        secondDurationUnit,
    );
    var thirdAmountInDays = getThirdAmountInDays(
        thirdAmount,
        thirdDuration,
        thirdDurationUnit,
    );

    var totalPrescription =
        firstAmountInDays + secondAmountInDays + thirdAmountInDays;

    var tubNumber = (totalPrescription * gramsPerScoop) / gramsPerTub;

    document.getElementById("totalPrescription").textContent =
        totalPrescription;
    document.getElementById("tubNumber").textContent = tubNumber;
}