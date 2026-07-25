"use strict";

// class LocalDatabase {
//     getStock(drug) {
//         const stock = Number.parseFloat(localStorage.getItem(drug));
//         return stock || 0;
//     }
//
//     setStock(drug, amount) {
//         localStorage.setItem(drug, amount)
//     }
// }
//
// const db = new LocalDatabase();

var flunixinAmount = 0;
var medesedanAmount = 0;
var butadorAmount =0;

function calculateInventory(e) {
    e.preventDefault();
    var drug = document.getElementById("drug").value;
    var direction = document.getElementById("direction").value;
    var amount = Number.parseFloat(document.getElementById("amount").value);
    var newStock = document.getElementById("newStock").textContent;

    console.log(drug)
    console.log(direction)
    console.log(amount)

    if (direction === "used") {
        amount *= -1;
    }

    if (drug === "flunixin") {
        flunixinAmount += amount;
        console.log(flunixinAmount);
        document.getElementById("newStock").textContent = "There is " + flunixinAmount + "ml flunixin in the car"
    }
    ;

    if (drug === "medesedan") {
        medesedanAmount += amount;
        console.log(medesedanAmount);
        document.getElementById("newStock").textContent = "There is " + medesedanAmount + "ml medesedan in the car"
    }
    ;

    if (drug === "butador") {
        butadorAmount += amount;
        console.log(butadorAmount);
        document.getElementById("newStock").textContent = "There is " + butadorAmount + "ml butador in the car"
    };
}