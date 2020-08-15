//Grabbing Necessary Elements from DOM

let balanceValue = document.getElementById('balanceValue');
let incomeVal = document.getElementById('incomeVal');
let expenseVal = document.getElementById('expenseVal');
let historyContainer = document.getElementById('historyContainer');
let newItemName = document.getElementById('expenseName');
let newItemValue = document.getElementById('itemValue');
let fillAllError = document.getElementById('fillAllError');
let needIntError = document.getElementById('needIntError');
let form = document.getElementById('addTrans');

//Functions//

function updateBalance() {
    console.log(incomeVal.innerHTML, expenseVal.innerHTML);

    balanceValue.innerHTML = parseFloat(incomeVal.innerHTML - expenseVal.innerHTML);
}

function updateExpenses(numberSign) {
    let newIntValueIncome = parseFloat(newItemValue.value);

    if (numberSign === '+') {
        incomeVal.innerHTML = (parseFloat(incomeVal.innerHTML) + newIntValueIncome);
    } else if (numberSign === '-') {
        expenseVal.innerHTML = Math.abs(parseFloat(expenseVal.innerHTML) + newIntValueIncome)
    }
    
    updateBalance();

}

function checkSign() {
    let negNumSign = '-';
    let posNumSign = '+';
    let grncolor = 'darkgreen';
    let mrncolor = 'maroon';
    if(newItemValue.value.includes('-') === true) {
        addToHistory(negNumSign, mrncolor);
        updateExpenses(negNumSign)
    } else {
        addToHistory(posNumSign, grncolor);
        updateExpenses(posNumSign)
    }
}

function checkAmountNum() {
    return isNaN(newItemValue.value);
}

function clearFields() {
    newItemName.value = '';
    newItemValue.value = '';
    fillAllError.style.visibility = 'hidden';
}

function checkEmpty() {
    return (newItemName.value == '' || newItemValue.value == '' ? true : false);
}

function showFillAllError() {
    console.log("This is working");
    return fillAllError.style.visibility = 'visible';
}

function addToHistory(sign, color) {
    let newElement = document.createElement('div');
    newElement.className = 'indiv-history-value-container';

    newElement.innerHTML = `
        <h3>${newItemName.value}</h3>
        <p>${sign}$${Math.abs(newItemValue.value)}</p>
    `
    newElement.lastElementChild.style.color = color;
    
    historyContainer.appendChild(newElement);

}


//Adding Event Listeners

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (checkEmpty() === false && checkAmountNum() === false) {
        checkSign();
        clearFields();
    } else {
        showFillAllError();
    }
});

/* Note of Features to add:
1. Check if label or amount is blank, if true, report error message --DONE
2. Check if amount is a number, if letter, report error message. --DONE
3. Add +$____ to positive integers, and -$_____ to negative integers -- DONE
4. Add Updated Income / Expenses -- DONE;
5. Add Updated Balances --DONE
6. Add Ability To Remove History Transactions
7. Add persistence to local storage

*/