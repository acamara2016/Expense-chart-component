import React from 'react';
import './App.css';
import Balance from './components/Balance';
import BalanceDetail from './components/BalanceDetail';
import data from './data/data.json';
import { getTotalExpense } from './hooks/useExpenses';
function App() {
  return (
    <div className="App">
      <Balance balance={getTotalExpense()}/>
      <BalanceDetail expenses={data} />
    </div>
  );
}

export default App;
