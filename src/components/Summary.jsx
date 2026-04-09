import React from "react";

function Summary({ budget, expenses }) {
  const total = expenses.reduce((acc, curr) => acc + curr.amount, 0);
  const remaining = budget - total;

  return (
    <div className="card summary">
      <h3>Summary</h3>

      <p>Budget: ₹{budget}</p>
      <p>Spent: ₹{total}</p>

      <p className={remaining >= 0 ? "positive" : "negative"}>
        Remaining: ₹{remaining}
      </p>
    </div>
  );
}

export default Summary;