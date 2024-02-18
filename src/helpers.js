export const waait = () => new Promise (res => setTimeout(res, Math.random()*2000))

//colors
const generateRandomColor = () => {
    const existingBudgetLength = fetchData("budgets")?.length ?? 0;
    return '${existingBudgetLength * 34} 65% 50%';
}
//local storage
export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key));
};

//create budget
export const createBudget = ({name, amount}) => {
    const newItem = {
        id: crypto.randomUUID(),
        name: name,
        createAt: Date.now(),
        amount: +amount,
        color: generateRandomColor()
    }
    const existingBudgets = fetchData("budgets") ?? [];
    return localStorage.setItem("budgets", JSON.stringify([existingBudgets,newItem]));
}
expenses
//delete item
export const deleteItem = ({key}) => {
    localStorage.removeItem(key);
}

//format currency
export const formatCurrency = (amt) => {
    return amt.toLocaleString(undefined, {
        style: "currency",
        currency: "USD",
    })
}

// create expense
export const createExpense = ({
    name, amount, budgetId
  }) => {
    const newItem = {
      id: crypto.randomUUID(),
      name: name,
      createdAt: Date.now(),
      amount: +amount,
      budgetId: budgetId
    }
    const existingExpenses = fetchData("expenses") ?? [];
    return localStorage.setItem("expenses",
      JSON.stringify([...existingExpenses, newItem]))
  }

  //total spent by budget
  export const calculateSpentByBudget = (budgetId) => {
    const expenses = fetchDate("expenses") ?? [];
    const budgetSpent = expenses.reduce();
  }
