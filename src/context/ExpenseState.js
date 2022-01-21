import ExpenseContext from './ExpenseContext.js';
import { useState } from 'react';


const ExpenseState = (props) => {

    const host = "http://localhost:5000"

    const initialExpenses = [];
        

    const [expenses, setExpenses] = useState(initialExpenses);

   // Get all expenses
   const getExpenses = async (token) => {
    // API Call 
    const response = await fetch(`${host}/api/expenses/fetchallexpenses`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": token
      }
    });
    const json = await response.json() 
    console.log(json);
    setExpenses(json.expenses)
  }

  // Add a expense
  const addExpense = async (title, value, category,token) => {
    // TODO: API Call
    // API Call 
    const response = await fetch(`${host}/api/expenses/createexpense`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": token
      },
      body: JSON.stringify({title, value, category})
    });

    const expense = await response.json();
    setExpenses(expenses.concat(expense))
  }


  // Edit a expense
  const editExpense = async (id, title, value, category,token) => {
    // API Call 
    const response = await fetch(`${host}/api/expenses/updateexpense/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": token
      },
      body: JSON.stringify({title, value, category})
    });
    const json = await response.json(); 

     let newExpenses = JSON.parse(JSON.stringify(expenses))
    // Logic to edit in client
    for (let index = 0; index < newExpenses.length; index++) {
      const element = newExpenses[index];
      if (element._id === id) {
        newExpenses[index].title = title;
        newExpenses[index].value = value;
        newExpenses[index].category = category; 
        break; 
      }
    }  
    setExpenses(newExpenses);
  }

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense, editExpense, getExpenses }}>
      {props.children}
    </ExpenseContext.Provider>
  )
}

export default ExpenseState;
