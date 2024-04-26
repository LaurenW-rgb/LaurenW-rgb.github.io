function getFirstAmountInDays (firstAmount, firstDurationUnit) {
    if (firstDurationUnit === "durationDays"){
        return firstAmount;
    }
    else if (firstDurationUnit === "durationWeeks"){
        return firstAmount*7;
    };
};

function getSecondAmountInDays (secondAmount, secondDurationUnit) {
    if (secondDurationUnit === "durationDays"){
        return secondAmount;
    }
else if (secondDurationUnit === "durationWeeks"){
        return secondAmount*7;
    };
};

function getThirdAmountInDays (thirdAmount, thirdDurationUnit) {
    if (thirdDurationUnit === "durationDays"){
        return thirdAmount;
    }
else if (thirdDurationUnit === "durationWeeks"){
        return thirdAmount*7;
    };
};

function calculatePrescription(){
    var firstAmount = document.getElementById('firstAmount').value;
    var firstDurationUnit = document.getElementById('firstDurationUnit').value;
    var secondAmount = document.getElementById('secondAmount').value;
    var secondDurationUnit = document.getElementById('secondDurationUnit').value;
    var thirdAmount = document.getElementById('thirdAmount').value;
    var thirdDurationUnit = document.getElementById('thirdDurationUnit').value;

    var firstAmountInDays = getFirstAmountInDays(firstAmount, firstDurationUnit);
    var secondAmountInDays = getSecondAmountInDays(secondAmount, secondDurationUnit);
    var thirdAmountInDays = getThirdAmountInDays(thirdAmount, thirdDurationUnit);

    var totalPrescription = firstAmountInDays + secondAmountInDays + thirdAmountInDays;
    document.getElementById("totalPrescription").textContent= "Total prescription = " + totalPrescription + " sachets/mls";
};