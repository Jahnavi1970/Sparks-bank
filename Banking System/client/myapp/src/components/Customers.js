import React from "react";
import { useState, useEffect } from "react";
import { getAllCustomers } from "../utils/handleApis";

const Customers = () => {
  const [showCustomers, setShowCustomers] = useState([]);

  useEffect(() => {
    getAllCustomers(setShowCustomers);
  }, []);

  return (
    <div>
      <h1>Sparks Foundation Bank</h1>

      <h3 className="margin-top-40">View Customers</h3>
      <div className="customer-container">
        {showCustomers.map((customer) => {
          return (
            <div key={customer._id} className="customer-item">
              <p>
                <strong>Name</strong>: {customer.name}
              </p>
              <p>
                <strong>Email</strong>: {customer.emailId}
              </p>
              <p>
                <strong>Balance</strong>: {customer.balance}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Customers;
