import axios from "axios";

const baseUrl = "https://sparks-bank.onrender.com/customers";

const getAllCustomers = async (setShowCustomers) => {
  const response = await axios.get(baseUrl);
  //console.log(response);
  setShowCustomers(response.data);
};

const getAllTransactions = async (setShowTransactions) => {
  const response = await axios.get(
    "https://sparks-bank.onrender.com/transactions"
  );
  //console.log(response);
  setShowTransactions(response.data);
};

export { getAllCustomers, getAllTransactions };
