import React,{ useContext, useEffect, useRef, useState} from 'react';
import CreateExpense from './CreateExpense';
import ExpenseContext from '../context/ExpenseContext';
import Expenseitem from './Expenseitem';
import { useNavigate  } from 'react-router-dom'
import ExpenseChart from './ExpenseChart';

function Expenses() {
    const context = useContext(ExpenseContext);
    const { expenses,getExpenses,editExpense} = context;
    let navigate = useNavigate();
    useEffect(() => {
        if(localStorage.getItem('token')){
            getExpenses(localStorage.getItem('token'));
        }else{
            navigate('/login');
        }
        
        // eslint-disable-next-line
    }, [])

    const ref = useRef(null)
    const refClose = useRef(null)
    const [expense, setExpense] = useState({id: "", etitle: "", evalue: "", ecategory: ""})

    const updateExpense = (currentExpense) => {
        console.log("updating expense");
        ref.current.click();
        setExpense({id: currentExpense._id, etitle: currentExpense.title, evalue: currentExpense.value, ecategory:currentExpense.category})
    }

    const handleClick = (e)=>{ 
        editExpense(expense.id, expense.etitle, expense.evalue, expense.ecategory.localStorage.getItem('token'))
        refClose.current.click();
    }

    const onChange = (e)=>{
        setExpense({...expense, [e.target.name]: e.target.value})
    }

  return <>
  <div className="container">
  <div className="row mt-4">
      <div className="col col-md-4">
      <CreateExpense />
      </div>


      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit expense</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="my-3">
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" name="etitle" value={expense.etitle} aria-describedby="emailHelp" onChange={onChange} minLength={5} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="value" className="form-label">Value</label>
                                    <input type="number" className="form-control" id="evalue" name="evalue" value={expense.evalue} onChange={onChange} required/>
                                </div>
                                <div className="mb-3">
                                <label htmlFor="category" className="form-label">Category</label>
                                <select className="form-select" aria-label="Select Category" name="category" defaultValue={expense.ecategory} id="category" onChange={onChange}>
           
                    <option value="grocery">Grocery</option>
                    <option value="school">School</option>
                    <option value="shopping">Shopping</option>
                </select>
                                </div>
 
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={expense.etitle.length<5} onClick={handleClick} type="button" className="btn btn-primary">Update expense</button>
                        </div>
                    </div>
                </div>
            </div>
 

  <div className="col col-md-8 ml-2 mt-2">
      <h2 class="text-center">Your Expenses</h2>
      <div className="container">
      <ul className="list-group mt-3">  
      {expenses.map((expense) => {
                    return <Expenseitem expense={expense} updateExpense={updateExpense}/>
                })}
      </ul>  
      </div>
      <ExpenseChart expenses={expenses}/>
  </div>
  </div>  
  </div>
 
  </>;
}

export default Expenses;
