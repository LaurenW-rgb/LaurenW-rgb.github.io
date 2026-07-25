"use strict";

class LocalDatabase {
    getStock(drug) {
        const stock = Number.parseFloat(localStorage.getItem(drug));
        return stock || 0;
    }

    setStock(drug, amount) {
        localStorage.setItem(drug, amount)
    }

    changeStock(drug, delta) {
        var amount = this.getStock(drug);
        amount += delta;
        this.setStock(drug, amount);
    }
}

const db = new LocalDatabase();

var medesedanAmount = 0;
var butadorAmount =0;

function calculateInventory(e) {
    e.preventDefault();
    var drug = document.getElementById("drug").value;
    var direction = document.getElementById("direction").value;
    var delta = Number.parseFloat(document.getElementById("amount").value);
    var newStock = document.getElementById("newStock").textContent;

    console.log(drug)
    console.log(direction)
    console.log(delta)

    if (direction === "used") {
        delta *= -1;
    }
    
        db.changeStock(drug, delta)
        document.getElementById("newStock").textContent = "There is " + db.getStock(drug) + "ml " + drug + " in the car"

    if (drug === "medesedan") {
        medesedanAmount += delta;
        console.log(medesedanAmount);
        document.getElementById("newStock").textContent = "There is " + medesedanAmount + "ml medesedan in the car"
    }
    ;

    if (drug === "butador") {
        butadorAmount += delta;
        console.log(butadorAmount);
        document.getElementById("newStock").textContent = "There is " + butadorAmount + "ml butador in the car"
    };
}