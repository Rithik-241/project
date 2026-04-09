import React, { useState } from "react";

function BudgetForm({ setBudget }) {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setBudget(Number(amount));
    setAmount("");
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h3>Set Budget</h3>
      <input
        type="number"
        placeholder="Enter budget"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Set Budget</button>
    </form>
  );
}

export default BudgetForm;