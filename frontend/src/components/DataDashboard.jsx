import React from "react";
import { GlobalProvider } from "../context/GlobalState";
import AddTransaction from "./AddTransaction";
import Balance from "./Balance";
import Header from "./Header";
import IncomeExpenses from "./IncomeExpenses";
import TransactionList from "./TransactionList";

const DataDashboard = () => {
  return (
    <div>
      <Header />
      <GlobalProvider>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <Balance />
              <IncomeExpenses />
              <AddTransaction />
            </div>
            <div className="col-md-4">
              <TransactionList />
            </div>
          </div>
        </div>
      </GlobalProvider>
    </div>
  );
};

export default DataDashboard;
