import React,{ useContext, useEffect } from 'react';
import CreateExpense from './CreateExpense';
import ExpenseContext from '../context/ExpenseContext';
import Expenseitem from './Expenseitem';

function Expenses() {
    const context = useContext(ExpenseContext);
    const { expenses,getExpenses} = context;
    useEffect(() => {
        getExpenses()
        // eslint-disable-next-line
    }, [])

  return <>
  <div className="container">
  <div className="row mt-4">
      <div className="col col-md-4">
      <CreateExpense />
      </div>
 

  <div className="col col-md-8 ml-2 mt-2">
      <h2 class="text-center">Your Expenses</h2>
      <div className="container">
      <ul className="list-group mt-3">  
      {expenses.map((expense) => {
                    return <Expenseitem expense={expense} />
                })}
      </ul>  
      </div>
  </div>
  </div>  
  </div>
 
  </>;
}

export default Expenses;
