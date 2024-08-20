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

function calculatePrescription() {
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

    var gramsPerScoop = 3;
    var gramsPerTub = 250;

    if (document.getElementById("drug").textContent === "ventipulmin") {
        gramsPerScoop = 10;
        gramsPerTub = 500;
    } else if (document.getElementById("drug").textContent === "sucralfate") {
        gramsPerScoop = 3;
        gramsPerTub = 250;
    } else if (document.getElementById("drug").textContent === "equisolon") {
        gramsPerScoop = 4.5;
        gramsPerTub = 180;
    } else if (document.getElementById("drug").textContent === "custom") {
        gramsPerScoop = 0;
        gramsPerTub = 0;
    }

    var totalScoops =
        firstAmountInDays + secondAmountInDays + thirdAmountInDays;
    var totalGrams = totalScoops * gramsPerScoop;
    var totalTubs = totalGrams / gramsPerTub;

    document.getElementById("totalScoops").textContent = totalScoops.toFixed(1);
    document.getElementById("totalGrams").textContent = totalGrams.toFixed(1);
    document.getElementById("totalTubs").textContent = totalTubs.toFixed(1);
}
