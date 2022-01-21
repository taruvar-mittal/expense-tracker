import UserContext from './UserContext.js';
import { useState } from 'react';


const UserState = (props) => {

    // const initialtoken = "";
    const initialUser = {};
        

    // const [token, setToken] = useState(initialtoken);
    const [user, setUser] = useState(initialUser);

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
        // console.log(json);
        if (json.jwtToken){
            // Save the auth token and redirect
            // console.log('inside login');
            localStorage.setItem('token', json.jwtToken); 
            // console.log(localStorage.getItem('token'));
            
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
        // console.log(json);
        if (json.authToken){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authToken); 
        }
        else{
            alert("Invalid credentials");
        }
      }


    const getuser = async(token) => {
        console.log('getuser');
        const response = await fetch(`${host}/api/auth/getuser`, {
            method: 'POST',
            headers: {
                'auth-token': token
            },
    
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
            
            setUser(json);
            // console.log(token);
        }
        else{
            alert("no user found");
        }
    }
    

  return (
    <UserContext.Provider value={{ login, signup, user, getuser}}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserState;
