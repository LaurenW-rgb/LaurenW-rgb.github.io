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

const drugNames = ["Butorphanol", "Detomidine", "Flunixin"];

var drugSelect = document.getElementById("drug");
drugNames.forEach(drug => {
    const option = document.createElement("option");
    option.value = drug;
    option.textContent = drug;

    drugSelect.appendChild(option);
});

function writeResults() {
    var resultsTable = document.getElementById("results");

    resultsTable.replaceChildren([]);

    drugNames.forEach(drug => {
        const row = document.createElement("tr");
        resultsTable.appendChild(row);

        var drugCell = document.createElement("td");
        drugCell.textContent = drug;
        row.appendChild(drugCell);

        var drugAmount = document.createElement("td");
        drugAmount.textContent = db.getStock(drug);
        row.appendChild(drugAmount);
    })
}

writeResults();

function calculateInventory(e) {
    e.preventDefault();
    var drug = drugSelect.value;
    var direction = document.getElementById("direction").value;
    var delta = Number.parseFloat(document.getElementById("amount").value);

    console.log(drug)
    console.log(direction)
    console.log(delta)

    if (direction === "used") {
        delta *= -1;
    }

    db.changeStock(drug, delta)
    writeResults();
    document.getElementById("newStock").textContent = "There is " + db.getStock(drug) + "ml " + drug + " in the car"
}