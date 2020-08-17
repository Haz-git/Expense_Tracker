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
    return fillAllError.style.visibility = 'visible';
}

function delChild(parent, child) {
    return parent.removeChild(child);
}

function balanceIncome(numString) {
    incomeVal.innerHTML = Math.abs(parseFloat(incomeVal.innerHTML) - parseFloat(numString)).toFixed(2);
}

function balanceExpense(numString) {
    expenseVal.innerHTML = Math.abs(parseFloat(expenseVal.innerHTML) - parseFloat(numString)).toFixed(2);
}

function addToHistory(sign, color) {
    let newElement = document.createElement('div');
    newElement.className = 'indiv-history-value-container';
    let delBtn = document.createElement('button');
    let delIcon = document.createElement('i');
    delIcon.className = 'fas fa-times-circle fa-1.5x';
    delBtn.appendChild(delIcon);
    newElement.appendChild(delBtn);
    let h3Header = document.createElement('h3');
    h3Header.innerHTML = newItemName.value;
    newElement.appendChild(h3Header);
    let pHistory = document.createElement('p');
    pHistory.innerHTML = sign + '$' + Math.abs(newItemValue.value);
    newElement.appendChild(pHistory);

    console.log(newElement.innerHTML);
    newElement.lastElementChild.style.color = color;
    historyContainer.appendChild(newElement);

    delBtn.addEventListener('click', (e) => {
        e.preventDefault();
        historyContainer.removeChild(newElement);
        if (sign === '-') {
            balanceExpense(pHistory.innerHTML.substring(2));
        } else {
            balanceIncome(pHistory.innerHTML.substring(2));
        }
        
    });

    //Problems 8/15/2020: Deletion of all newElement Children on click/ Delete button only works for the first one/ If you delete everything, and try to add again, it won't let you.. - Solved -- Apparently, you can't use innerHTML along with document.createElement or else the addEventListener will not work...
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
6. Add Ability To Remove History Transactions --DONE
7. Update Balance, income, and expense upon deletion 
7. Add persistence to local storage

*/