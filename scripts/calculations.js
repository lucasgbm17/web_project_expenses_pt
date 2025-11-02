let budgetValue = 0;

let totalExpensesValue = 0;

let expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

for (let i = 0; i < expenseEntries.length; i++) {
  totalExpensesValue = totalExpensesValue + expenseEntries[i][1];
  console.log(`Despesas totais: ${totalExpensesValue}.`);
}

function calculateAverageExpense() {
  return totalExpensesValue / expenseEntries.length;
}

function calculateBalance() {
  return budgetValue - totalExpensesValue;
}

function updateBalanceColor() {
  const i = calculateBalance();
  if (i < 0) {
    balanceColor = "red";
  } else if (i < budgetValue * 0.25) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
  return balanceColor;
}

function calculateCategoryExpenses(category) {
  let total = 0;

  for (let i = 0; i < expenseEntries.length; i++) {
    const [cat, amount] = expenseEntries[i];
    if (
      typeof cat === "string" &&
      cat.toLowerCase() === String(category).toLowerCase()
    ) {
      total += Number(amount) || 0;
    }
  }
  return total;
}

const categories = [
  "groceries",
  "restaurants",
  "transport",
  "home",
  "subscriptions",
];

function getCategoriesTotals() {
  const categoriesTotals = [];
  for (let i = 0; i < categories.length; i++) {
    const cat = categories[i];
    const total = calculateCategoryExpenses(cat);
    categoriesTotals.push([cat, total]);
  }
  return categoriesTotals;
}

function calculateLargestCategory() {
  const categoriesTotals = getCategoriesTotals();

  if (categoriesTotals.length === 0) return "";

  let [largestCategory, largestTotal] = categoriesTotals[0];

  for (let i = 1; i < categoriesTotals.length; i++) {
    const [cat, total] = categoriesTotals[i];
    if (total > largestTotal) {
      largestCategory = cat;
      largestTotal = total;
    }
  }

  return largestCategory;
}

function addExpenseEntry(entry) {
  expenseEntries.push(entry);
  totalExpensesValue += Number(entry[1]) || 0;
  return totalExpensesValue;
}
