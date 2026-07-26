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

function calculateInventory(e) {
    e.preventDefault();
    var drug = document.getElementById("drug").value;
    var direction = document.getElementById("direction").value;
    var delta = Number.parseFloat(document.getElementById("amount").value);

    console.log(drug)
    console.log(direction)
    console.log(delta)

    if (direction === "used") {
        delta *= -1;
    }

        db.changeStock(drug, delta)
        document.getElementById("newStock").textContent = "There is " + db.getStock(drug) + "ml " + drug + " in the car"
}