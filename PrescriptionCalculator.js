function setPageUnits(e){
    e.preventDefault();

    var prescriptionType = document.getElementById("prescriptionType").value;
    if (prescriptionType === "sachets"){
        document.getElementById("suffixID").textContent = "sachets";
    } else if (prescriptionType === "tubs"){
        document.getElementById("suffixID").textContent = "scoops";
    }
    else if (prescriptionType === "select"){
        document.getElementById("suffixID").textContent = "";
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

    document.getElementById("totalPrescription").textContent =
        totalPrescription;
}