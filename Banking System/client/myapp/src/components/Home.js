import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Sparks Foundation Bank</h1>
      <div className="button-container">
        <div className="display-flex">
          <button
            className="button-style"
            onClick={() => {
              navigate("/customers");
            }}
          >
            View Customers
          </button>
        </div>

        <div className="display-flex">
          <button
            className="button-style"
            onClick={() => {
              navigate("/transfer");
            }}
          >
            Send Money
          </button>
        </div>
        <div className="display-flex">
          <button
            className="button-style"
            onClick={() => {
              navigate("/transactions");
            }}
          >
            View Transactions
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
