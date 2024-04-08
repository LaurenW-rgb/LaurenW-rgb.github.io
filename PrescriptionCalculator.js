function calculatePrescription(){
    var firstAmount = document.getElementById('firstAmount').value;
    var firstDuration = document.getElementById('firstDuration').value;
    var secondAmount = document.getElementById('secondAmount').value;
    var secondDuration = document.getElementById('secondDuration').value;
    var thirdAmount = document.getElementById('thirdAmount').value;
    var thirdDuration = document.getElementById('thirdDuration').value;

    var totalPrescription = (firstAmount * firstDuration * 7) + (secondAmount * secondDuration * 7) + (thirdAmount * thirdDuration * 7);
    document.getElementById("totalPrescription").textContent= "Total prescription = " + totalPrescription + "sachets/mls";
};