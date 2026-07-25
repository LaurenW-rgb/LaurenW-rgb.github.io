"use strict";

// class LocalDatabase {
//     getStock(drug) {
//         const stock = Number.parseInt(localStorage.getItem(drug));
//         return stock || 0;
//     }
//
//     setStock(drug, amount) {
//         localStorage.setItem(drug, amount)
//     }
// }

// const db = new LocalDatabase();

var flunixinAmount = 0;
var medesedanAmount = 0;
var butadorAmount =0;

function calculateInventory(e) {
    e.preventDefault();
    var drug = document.getElementById("drug").value;
    var direction = document.getElementById("direction").value;
    var amount = Number.parseFloat(document.getElementById("amount").value);

    console.log(drug)
    console.log(direction)
    console.log(amount)

    if (drug === "flunixin" && direction === "added") {
        flunixinAmount += amount;
        console.log(flunixinAmount);
    } else if (drug === "flunixin" && direction === "used") {
        flunixinAmount -= amount;
        console.log(flunixinAmount);
    };

    if (drug === "medesedan" && direction === "added") {
        medesedanAmount += amount;
        console.log(medesedanAmount);
    } else if (drug === "medesedan" && direction === "used") {
        medesedanAmount -= amount;
        console.log(medesedanAmount);
    };

    if (drug === "butador" && direction === "added") {
        butadorAmount += amount;
        console.log(butadorAmount);
    } else if (drug === "butador" && direction === "used") {
        butadorAmount -= amount;
        console.log(butadorAmount);
    };

}