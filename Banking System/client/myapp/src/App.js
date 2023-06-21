import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Customers from "./components/Customers";
import Transfer from "./components/Transfer";
import Transactions from "./components/Transactions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/transactions" element={<Transactions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
