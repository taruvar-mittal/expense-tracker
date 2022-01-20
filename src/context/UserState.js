import UserContext from './UserContext.js';
import { useState } from 'react';


const UserState = (props) => {

    const initialtoken = "";
        

    const [token, setToken] = useState(initialtoken);

    const host = "http://localhost:5000"



    const login = async (email,password) => {
       
        console.log('login');
        const response = await fetch(`${host}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
            setToken(json.jwtToken);

        }
        else{
            alert("Invalid credentials");
        }
      }


      const signup = async (name,email,password) => {
       
        console.log('signup');
        const response = await fetch(`${host}/api/auth/createuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name,email, password})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
            setToken(json.authToken);
            console.log(token);
        }
        else{
            alert("Invalid credentials");
        }
      }


    
    

  return (
    <UserContext.Provider value={{ login, token, signup}}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserState;
