import React, {useState} from 'react';
import { Link, useLocation, useNavigate} from 'react-router-dom';

function Navbar() {
    const location = useLocation();
    let navigate = useNavigate();

    const [hover,setHover] = useState(false);

    
const toggleHover = () => {
	setHover(!hover)
}


    const handleLogout = () => {
      localStorage.removeItem('token');
      navigate('/login');
    }
  return <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Expense Manager</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Dashboard</Link>
        </li>

        <li className="nav-item">
          <Link className={`nav-link ${location.pathname === "/settings" ? "active" : ""}`} aria-current="page" to="/settings">Settings</Link>
        </li>
       
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname === "/login" ? "active" : ""}`} to="/login">Login</Link>
        </li>
        
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname === "/signup" ? "active" : ""}`} to="/signup">Sign Up</Link>
        </li>
        
        <li className="nav-item">
          <form><button className="btn btn-dark"  onMouseEnter={toggleHover} onMouseLeave={toggleHover} style={!hover ? {color:"#ffffff8c"} : {color : "white"}} onClick={handleLogout}>Logout</button></form>
        </li>
        
        
      </ul>
     
    </div>
  </div>
</nav>
</>
}

export default Navbar;
