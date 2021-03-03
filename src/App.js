import React from 'react';
 import "./App.css"
import Amount from './components/Amount';
import ExpenseList from './components/ExpenseList';
import Header  from './components/Header';
import IncomeList from './components/IncomeList';
import TransactionInputs from './components/TransactionInputs';
import { GlobalProvider } from './context/GlobalState';


 
 const App = () => {
     return (
         <GlobalProvider>
         <div className="container">
        <div className="app-wrapper">
        <Header />
        <Amount />
        <TransactionInputs />
        <IncomeList />
        <ExpenseList />
        </div>        
         </div>
         </GlobalProvider>
     );
 };
 
 export default App
 