import React from "react";

function ExpenseList({ expenses, deleteExpense }) {
  return (
    <div className="card">
      <h3>Expenses</h3>

      {expenses.length === 0 && <p>No expenses yet</p>}

      {expenses.map((exp, index) => (
        <div key={index} className="expense-item">
          <span>
            {exp.title} - ₹{exp.amount}
          </span>
          <button onClick={() => deleteExpense(index)}>❌</button>
        </div>
      ))}
    </div>
  );
}

export default ExpenseList;