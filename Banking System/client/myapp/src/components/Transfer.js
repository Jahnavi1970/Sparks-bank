import React from "react";
import { useState, useEffect } from "react";
import { getAllCustomers } from "../utils/handleApis";
import axios from "axios";

const Transfer = () => {
  const [customerData, setCustomerData] = useState([]);
  const [fromId, setFromId] = useState("");
  const [toId, setToId] = useState("");
  const [amount, setAmount] = useState(0);
  const [response, setResponse] = useState(null);

  const afterSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(
        `https://sparks-bank.onrender.com/send/${fromId}/${toId}`,
        { amount }
      );
      setResponse(res?.data);
    } catch (e) {
      setResponse(e?.response?.data);
    }
  };

  useEffect(() => {
    getAllCustomers(setCustomerData);
  }, []);

  return (
    <div>
      <h1>Sparks Foundation Bank</h1>
      <h3 className="margin-top-40">Send Money</h3>
      <div className="response-container">{response?.message}</div>
      <form className="transfer-container">
        <select
          className="input-container"
          onChange={(e) => {
            setFromId(e.target.value);
          }}
        >
          <option>Choose the sender</option>
          {customerData.map((customer) => {
            return (
              <option key={customer._id} value={customer.userId}>
                {customer.name}
              </option>
            );
          })}
        </select>
        <select
          className="input-container"
          onChange={(e) => {
            setToId(e.target.value);
          }}
        >
          <option>Choose the receiver</option>
          {customerData.map((customer) => {
            return (
              <option key={customer._id} value={customer.userId}>
                {customer.name}
              </option>
            );
          })}
        </select>

        <input
          className="input-container"
          type="number"
          placeholder="Amount"
          onChange={(e) => {
            setAmount(parseInt(e.target.value));
          }}
        ></input>
        <div className="button-container">
          <button type="submit" onClick={afterSubmit} className="button-style">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Transfer;
