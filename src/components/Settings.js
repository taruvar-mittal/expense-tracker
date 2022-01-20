import React from 'react';

function Settings() {
  return <div className='container mt-4'>
     <h2 className="text-center mb-3">
         Settings
     </h2>
     <div className="row">
     <form className="col col-md-4 my-3">
              
               <div className="mb-3">
                   <label style={{fontSize : "1.1em"}} htmlFor="budget" className="form-label">Set Budget</label>
                   <input type="number" className="form-control" id="budget" name="category" />
               </div>
               
               <button type="submit" className=" text-center btn btn-md btn-dark" >Add Budget</button>
           </form>
     
     
     <form className="col col-md-8 my-3">
              
               <div className="mb-3">
                   <label style={{fontSize : "1.1em"}} htmlFor="category" className="form-label">Add an expense Category</label>
                   <input type="text" className="form-control" id="category" name="category" />
               </div>
               
               <button type="submit" className=" text-center btn btn-md btn-dark" >Add Category</button>
           </form>
    
           </div>
  </div>;
}

export default Settings;
