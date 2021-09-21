var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var btnCalculate = document.querySelector("#btn-calculate");
var pInfo = document.querySelector("#p-info");
var tableList = document.querySelectorAll(".no-of-notes");
var pWords = document.querySelector("#p-words");
var cashToBeReturned, tempCash;
var notes = [2000, 500, 100, 20, 10, 5, 1]

btnCalculate.addEventListener("click", onClickCalculate)

function validate(number) {
    return !isNaN(number) && number.trim().length > 0;
}

function onClickCalculate() {
    amount = billAmount.value;
    given = cashGiven.value;
    if ((validate(amount)) && (validate(given))) {
        amount = parseInt(amount);
        given = parseInt(given);
        if (given >= amount) {
            if (amount === 0 && given > 0) {
                pInfo.innerText = "Thanks for the free cash!!!"
            }
            else {
                cashToBeReturned = given - amount;
                tempCash = cashToBeReturned;
                pInfo.innerText = "Cash to be returned: ₹" + cashToBeReturned;
                calculateChange(cashToBeReturned)
            }

        }
        else {
            pInfo.innerText = "We have some openings to wash dishes!";
        }
    }
    else {
        pInfo.innerText = "INVALID"
    }
}

function calculateChange(cashToBeReturned) {
    var words = ""
    for (var i = 0; i < notes.length; i++) {
        var noOfNotes = Math.trunc(cashToBeReturned / notes[i])
        tableList[i].innerText = noOfNotes;
        cashToBeReturned = cashToBeReturned % notes[i];

        // for words
        if (noOfNotes > 0) {
        words += noOfNotes + " x ₹" + notes[i] +" = "+noOfNotes*notes[i]+ "\n"
    }
    }
    words += "--------\nReturn: ₹" + tempCash;
    pWords.innerText = words;
}