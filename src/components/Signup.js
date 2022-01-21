import React, {useState, useContext} from 'react'
import { useNavigate  } from 'react-router-dom'
import UserContext from '../context/UserContext';




const Signup = (props) => {
    const [credentials, setCredentials] = useState({name:"", email: "", password: ""}) 
    let navigate = useNavigate();
    const context = useContext(UserContext);
    const {signup} = context;

    const handleSubmit = async (e) => {
        e.preventDefault();
   
       signup(credentials.name,credentials.email,credentials.password);
       navigate('/');
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
        <div class="container">
          <h2 className='text-center mt-3'>Signup</h2>
            <form  className="px-5 mx-5" onSubmit={handleSubmit}>
            <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" value={credentials.name} onChange={onChange} id="name" name="name" aria-describedby="emailHelp" />
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
                </div>

                <button type="submit" className="btn btn-dark">Submit</button>
            </form>
        </div>
    )
}

export default Signup