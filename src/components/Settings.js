import React,{useContext,useState} from 'react';
import UserContext from '../context/UserContext';
import { useNavigate} from 'react-router-dom';

function Settings() {
     const navigate = useNavigate();
    const context = useContext(UserContext);
    const {user,getuser} = context;
    const[budget,setBudget] = useState(0);
    const[category,setCategory] = useState("");

const addBudget = (e) => {
    e.preventDefault();
    if(!user){
        if(!localStorage.getItem('token')){
          navigate('/login');
        }else{
            getuser(localStorage.getItem('token'));
        }
    }
    
    user.budget = budget;
    
    // console.log(user.budget);
    setBudget(0);
}

const addCategory = (e) => {
    e.preventDefault();
    if(!user){
        if(!localStorage.getItem('token')){
          navigate('/login');
        }else{
            getuser(localStorage.getItem('token'));
        }
    }
   
    // console.log(user);
    user.categories.push(category);
  
    // console.log(user.budget);
    setCategory("");
}

const onChangeBudget = (e)=>{
    setBudget(e.target.value)
}

const onChangeCategory = (e) => {
    setCategory(e.target.value);
}

  return <div className='container mt-4'>
     <h2 className="text-center mb-3">
         Settings
     </h2>
     <div className="row">
     <form className="col col-md-4 my-3">
              
               <div className="mb-3">
                   <label style={{fontSize : "1.1em"}} htmlFor="budget" className="form-label">Set Budget</label>
                   <input type="number" className="form-control" id="budget" name="category" onChange={onChangeBudget} />
               </div>
               
               <button type="submit" className=" text-center btn btn-md btn-dark" onClick={addBudget}>Add Budget</button>
           </form>
     
     
     <form className="col col-md-8 my-3">
              
               <div className="mb-3">
                   <label style={{fontSize : "1.1em"}} htmlFor="category" className="form-label">Add an expense Category</label>
                   <input type="text" className="form-control" id="category" name="category" onChange={onChangeCategory} />
               </div>
               
               <button type="submit" className=" text-center btn btn-md btn-dark" onClick={addCategory}>Add Category</button>
           </form>
    
           </div>
  </div>;
}

export default Settings;
