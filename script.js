document.addEventListener("DOMContentLoaded", function () {
    // Initialize counts
    let numPennies = 0;
    let numNickels = 0;
    let numDimes = 0;
    let numQuarters = 0;
    let numHalfDollars = 0;
    let numDollars = 0;

    // Add event listeners for penny buttons
    document.getElementById("addPenny").addEventListener("click", function () {
        numPennies++;
        updateDisplay();
    });

    document.getElementById("addFivePennies").addEventListener("click", function () {
        numPennies += 5;
        updateDisplay();
    });
    
    document.getElementById("subtractFivePennies").addEventListener("click", function () {
        if (numPennies >= 5) {
            numPennies-= 5;
            updateDisplay();
        }
    });

    document.getElementById("subtractPenny").addEventListener("click", function () {
        if (numPennies > 0) {
            numPennies--;
            updateDisplay();
        }
    });
    
    document.getElementById("addNickel").addEventListener("click", function () {
        numNickels++;
        updateDisplay();
    });

    document.getElementById("addFiveNickels").addEventListener("click", function () {
        numNickels += 5;
        updateDisplay();
    });
    
    document.getElementById("subtractFiveNickels").addEventListener("click", function () {
        if (numNickels >= 5) {
            numNickels-= 5;
            updateDisplay();
        }
    });

    document.getElementById("subtractNickel").addEventListener("click", function () {
        if (numNickels > 0) {
            numNickels--;
            updateDisplay();
        }
    });
    
    document.getElementById("addDime").addEventListener("click", function () {
        numDimes++;
        updateDisplay();
    });

    document.getElementById("addFiveDimes").addEventListener("click", function () {
        numDimes += 5;
        updateDisplay();
    });
    
    document.getElementById("subtractFiveDimes").addEventListener("click", function () {
        if (numDimes >= 5) {
            numDimes-= 5;
            updateDisplay();
        }
    });

    document.getElementById("subtractDime").addEventListener("click", function () {
        if (numDimes > 0) {
            numDimes--;
            updateDisplay();
        }
    });
    
    document.getElementById("addQuarter").addEventListener("click", function () {
        numQuarters++;
        updateDisplay();
    });

    document.getElementById("addFiveQuarters").addEventListener("click", function () {
        numQuarters += 5;
        updateDisplay();
    });
    
    document.getElementById("subtractFiveQuarters").addEventListener("click", function () {
        if (numQuarters >= 5) {
            numQuarters-= 5;
            updateDisplay();
        }
    });

    document.getElementById("subtractQuarter").addEventListener("click", function () {
        if (numQuarters > 0) {
            numQuarters--;
            updateDisplay();
        }
    });
    
     document.getElementById("addHalfDollar").addEventListener("click", function () {
        numHalfDollars++;
        updateDisplay();
    });

    document.getElementById("addFiveHalfDollars").addEventListener("click", function () {
        numHalfDollars += 5;
        updateDisplay();
    });
    
    document.getElementById("subtractFiveHalfDollars").addEventListener("click", function () {
        if (numHalfDollars >= 5) {
            numHalfDollars-= 5;
            updateDisplay();
        }
    });

    document.getElementById("subtractHalfDollar").addEventListener("click", function () {
        if (numHalfDollars > 0) {
            numHalfDollars--;
            updateDisplay();
        }
    });
    
         document.getElementById("addDollar").addEventListener("click", function () {
        numDollars++;
        updateDisplay();
    });

    document.getElementById("addFiveDollars").addEventListener("click", function () {
        numDollars += 5;
        updateDisplay();
    });
    
    document.getElementById("subtractFiveDollars").addEventListener("click", function () {
        if (numDollars >= 5) {
            numDollars-= 5;
            updateDisplay();
        }
    });

    document.getElementById("subtractDollar").addEventListener("click", function () {
        if (numDollars > 0) {
            numDollars--;
            updateDisplay();
        }
    });

    

    // Function to update the display
    function updateDisplay() {
        document.getElementById("numPennies").textContent = numPennies;
        document.getElementById("totalPennies").textContent = (numPennies * 0.01).toFixed(2);
        
        document.getElementById("numNickels").textContent = numNickels;
        document.getElementById("totalNickels").textContent = (numNickels * 0.05).toFixed(2);

				document.getElementById("numDimes").textContent = numDimes;
        document.getElementById("totalDimes").textContent = (numDimes * 0.10).toFixed(2);
        
        document.getElementById("numQuarters").textContent = numQuarters;
        document.getElementById("totalQuarters").textContent = (numQuarters * 0.25).toFixed(2);
        
        document.getElementById("numHalfDollars").textContent = numHalfDollars;
        document.getElementById("totalHalfDollars").textContent = (numHalfDollars * 0.50).toFixed(2);
        
        document.getElementById("numDollars").textContent = numDollars;
        document.getElementById("totalDollars").textContent = (numDollars * 1).toFixed(2);


        // Update the total value of all coins
        const totalValue = (numPennies * 0.01) + (numNickels * 0.05) + (numDimes * 0.10) + (numQuarters * 0.25) + (numHalfDollars * 0.50) + (numDollars * 1);
        document.getElementById("totalValue").textContent = totalValue.toFixed(2);
    }

    // Initial display update
    updateDisplay();
});
