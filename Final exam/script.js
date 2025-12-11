/* 
  Simple Budget / Expense Tracker
  This file handles all of the JavaScript logic.
*/

// ----- Global variables (using let and const) -----
let totalIncome = 0;          // will store the user's income
let totalExpenses = 0;        // will store the sum of all expenses
const expenses = [];          // array to store each expense item

// Get references to HTML elements (DOM nodes)
const todayPara = document.getElementById("today");
const incomeInput = document.getElementById("incomeInput");
const incomeDisplay = document.getElementById("incomeDisplay");
const expenseNameInput = document.getElementById("expenseNameInput");
const amountInput = document.getElementById("amountInput");
const categorySelect = document.getElementById("categorySelect");
const expenseList = document.getElementById("expenseList");
const errorMessage = document.getElementById("errorMessage");
const summaryIncome = document.getElementById("summaryIncome");
const summaryExpenses = document.getElementById("summaryExpenses");
const summaryLeft = document.getElementById("summaryLeft");
const statusMessage = document.getElementById("statusMessage");
const tipMessage = document.getElementById("tipMessage");

// Buttons
const saveIncomeBtn = document.getElementById("saveIncomeBtn");
const addExpenseBtn = document.getElementById("addExpenseBtn");
const clearAllBtn = document.getElementById("clearAllBtn");

// ----- Show today's date using the Date object -----
const today = new Date();
todayPara.textContent = "Today is: " + today.toLocaleDateString();

/*
  Helper function: updateSummary
  This function recalculates money left and updates the text on the page.
*/
function updateSummary() {
  const moneyLeft = totalIncome - totalExpenses; // arithmetic: subtraction

  // Use toFixed to show two decimal places
  summaryIncome.textContent = "Total income: $" + totalIncome.toFixed(2);
  summaryExpenses.textContent = "Total expenses: $" + totalExpenses.toFixed(2);
  summaryLeft.textContent = "Money left: $" + moneyLeft.toFixed(2);

  // Conditionals with comparison and logical operators
  if (totalIncome === 0) {
    statusMessage.textContent = "Please enter your income so the tracker can work.";
    statusMessage.className = "warning";
  } else if (moneyLeft > 0 && moneyLeft / totalIncome >= 0.5) {   // logical AND
    statusMessage.textContent = "Nice! You are using less than half of your budget.";
    statusMessage.className = "";
  } else if (moneyLeft < 0 || totalExpenses > totalIncome) {       // logical OR
    statusMessage.textContent = "Warning: you are over budget!";
    statusMessage.className = "warning";
  } else {
    statusMessage.textContent = "You are close to your limit. Be careful with new expenses.";
    statusMessage.className = "";
  }

  showRandomTip(); // call another function to show a small tip
}

/*
  showRandomTip uses Math.random (built-in object) to pick a money tip.
*/
function showRandomTip() {
  const tips = [
    "Tip: Write down every expense for one week.",
    "Tip: Try to save at least 10% of your income.",
    "Tip: Compare prices before you buy big items."
  ];

  const index = Math.floor(Math.random() * tips.length); // arithmetic + Math
  tipMessage.textContent = tips[index];
}

/*
  Event handler for saving income.
  parseFloat is used to convert the input string to a number.
*/
function handleSaveIncome() {
  const incomeValue = parseFloat(incomeInput.value);

  // logical NOT operator and comparison
  if (isNaN(incomeValue) || !(incomeValue > 0)) {
    errorMessage.textContent = "Please enter a valid positive income.";
    return;
  }

  totalIncome = incomeValue;
  errorMessage.textContent = "";
  incomeDisplay.textContent = "Current income: $" + totalIncome.toFixed(2);
  updateSummary();
}

/*
  Event handler for adding an expense.
*/
function handleAddExpense() {
  const name = expenseNameInput.value.trim();
  const amount = parseFloat(amountInput.value);
  const category = categorySelect.value;

  if (!name || isNaN(amount) || amount <= 0) {
    errorMessage.textContent = "Please fill in a name and a positive amount.";
    return;
  }

  // clear any old error
  errorMessage.textContent = "";

  // Create an expense object and push it into our array
  const expenseItem = {
    label: name,
    category: category,
    amount: amount
  };
  expenses.push(expenseItem);

  // Update the running total of expenses
  totalExpenses += amount; // arithmetic: addition

  // Update the list in the DOM
  const li = document.createElement("li");
  li.textContent = `${expenseItem.label} - $${expenseItem.amount.toFixed(2)} (${expenseItem.category})`;
  expenseList.appendChild(li);

  // Clear the inputs for the next expense
  expenseNameInput.value = "";
  amountInput.value = "";

  // Recalculate the summary
  updateSummary();
}

/*
  Clear all data and reset back to zero.
*/
function handleClearAll() {
  totalIncome = 0;
  totalExpenses = 0;
  expenses.length = 0; // reset array

  incomeInput.value = "";
  expenseNameInput.value = "";
  amountInput.value = "";
  expenseList.innerHTML = "";

  incomeDisplay.textContent = "Current income: $0.00";
  statusMessage.textContent = "";
  tipMessage.textContent = "";
  errorMessage.textContent = "";

  updateSummary();
}

// ----- Event listeners (connecting buttons and functions) -----
saveIncomeBtn.addEventListener("click", handleSaveIncome);
addExpenseBtn.addEventListener("click", handleAddExpense);
clearAllBtn.addEventListener("click", handleClearAll);

// Call updateSummary once at the very beginning so the summary text is not empty.
updateSummary();
