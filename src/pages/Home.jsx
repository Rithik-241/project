import React, { useState } from "react";
import Navbar from "../components/Navbar";
import BudgetForm from "../components/BudgetForm";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import Summary from "../components/Summary";

function Home() {
  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (indexToDelete) => {
    setExpenses(expenses.filter((_, i) => i !== indexToDelete));
  };

  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="left">
          <BudgetForm setBudget={setBudget} />
          <ExpenseForm addExpense={addExpense} />
        </div>

        <div className="right">
          <Summary budget={budget} expenses={expenses} />
          <ExpenseList
            expenses={expenses}
            deleteExpense={deleteExpense}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
