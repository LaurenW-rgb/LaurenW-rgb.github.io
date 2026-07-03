"use strict";

class LocalDatabase {
    getStock(drug) {
        const stock = Number.parseInt(localStorage.getItem(drug));
        return stock || 0;
    }

    setStock(drug, amount) {
        localStorage.setItem(drug, amount)
    }
}

const db = new LocalDatabase();

function calculateInventory(e) {
    e.preventDefault();
    var drug = document.getElementById("drug").value;
    var direction = document.getElementById("direction").value;
    var amount = document.getElementById("amount").value;

    console.log(drug)
    console.log(direction)
    console.log(amount)

    db.setStock(drug, amount)
}