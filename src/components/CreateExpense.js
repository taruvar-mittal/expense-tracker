import React,{useContext,useState} from 'react';
import ExpenseContext from '../context/ExpenseContext';

function CreateExpense() {
    const context = useContext(ExpenseContext);
    const {addExpense} = context;

    const initialExpense = {title: "", value: "", category: "general"};

    const [expense, setExpense] = useState(initialExpense)

    const handleClick = (e)=>{
        e.preventDefault();
        addExpense(expense.title, expense.value, expense.category);
        setExpense(initialExpense);
    }

    const onChange = (e)=>{
        setExpense({...expense, [e.target.name]: e.target.value})
    }

    return <div>
        <div>
            <h2 className="text-center my-2">Add a new Expense</h2>
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="value" className="form-label">Value</label>
                    <input type="number" className="form-control" id="value" name="value" onChange={onChange}/>
                </div>
                <label htmlFor="category" className="form-label">Category</label>
                <select className="form-select" aria-label="Select Category" name="category" id="category" onChange={onChange}>
                <option selected>General</option>
                    <option value="grocery">Grocery</option>
                    <option value="school">School</option>
                    <option value="shopping">Shopping</option>
                </select>
                <button type="submit" className=" text-center mt-4 btn btn-dark" onClick={handleClick}>Add Expense</button>
            </form>
        </div>
    </div>;
}

export default CreateExpense;
