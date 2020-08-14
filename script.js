//Grabbing Necessary Elements from DOM

let balanceValue = document.getElementById('balanceValue');
let incomeVal = document.getElementById('incomeVal');
let expenseVal = document.getElementById('expenseVal');
let historyContainer = document.getElementById('historyContainer');
let newItemName = document.getElementById('expenseName').value;
let newItemValue = document.getElementById('itemValue').value;
let form = document.getElementById('addTrans');

//Functions//

addToHistory() {
    document.createElement()
}


//Adding Event Listeners

form.addEventListener('submit', (event) => {
    event.preventDefault();

    addToHistory();
});