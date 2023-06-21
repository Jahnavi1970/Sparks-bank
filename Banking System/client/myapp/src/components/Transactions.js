import React from "react";
import { useState, useEffect } from "react";
import { getAllTransactions } from "../utils/handleApis";

const Transactions = () => {
  const [showTransactions, setShowTransactions] = useState([]);

  useEffect(() => {
    getAllTransactions(setShowTransactions);
  }, []);

  return (
    <div>
      <h1>Sparks Foundation Bank</h1>
      <h3 className="margin-top-40">View Transactions</h3>
      <div className="customer-container">
        {showTransactions.map((transaction) => {
          return (
            <div key={transaction._id} className="customer-item">
              <p>
                <strong>From</strong>: {transaction.fromName}
              </p>
              <p>
                <strong>To</strong>: {transaction.toName}
              </p>
              <p>
                <strong>Amount</strong>: {transaction.amount}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Transactions;
