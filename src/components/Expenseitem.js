import React from 'react';

function Expenseitem(props) {
    const { expense } = props;
  return <>
    
    <li className="list-group-item">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">{expense.title}</h5>
      <span class="badge bg-success p-2" style={{fontSize : "1em", fontWeight : "500"}}>{expense.category}</span>
    </div>
    <div className="d-flex w-100 justify-content-between">
        <span>
        <h6 class="mb-1">Value - {expense.value}</h6>
   <small> {new Date(expense.date).toGMTString()}</small>
        </span>
   
    <span className="mt-3">
    <i className="far fa-edit mx-2"></i>
    <i className="far fa-trash-alt mx-2"></i>

    </span>
   
    </div>
    
    </li>
   
  

  </>;
}

export default Expenseitem;
