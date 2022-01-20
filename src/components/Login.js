import React, {useState, useContext} from 'react'
import { useNavigate  } from 'react-router-dom'
import UserContext from '../context/UserContext';




const Login = (props) => {
    const [credentials, setCredentials] = useState({email: "", password: ""}) 
    let navigate = useNavigate();
    const context = useContext(UserContext);
    const {login} = context;

    const handleSubmit = async (e) => {
        e.preventDefault();
   
       login(credentials.email,credentials.password);
       navigate('/');
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
        <div class="container">
          <h2 className='text-center mt-3'>Login</h2>
            <form  className="px-5 mx-5" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login