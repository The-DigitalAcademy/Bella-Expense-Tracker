var state = {
  balance: 0,
  income: 0,
  expense: 0,
  transactions:[
              {name:'income', group:'Salary',amount: 1500},
              {name:'expense',group:'Lunch', amount: 500},
  ]
}

function budget() {

  inputName = document.getElementById('input').value;
  amountMoney = document.getElementById('amount').value;

}

function approvalonScreen(value) {

  if (!value) {

    return false;
    
  }
  return true;
}

function addIncome() {

  budget();

  if (approvalonScreen(inputName) && approvalonScreen(amountMoney)) {

      item.push({
        no: item.length + 1,
        item: inputName,
        type: 'Income',
        amount: amountMoney,

      });

      clearnameInput();
    
  }
  
}