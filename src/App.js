
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Expenses from './components/Expenses';
import Navbar from './components/Navbar';
import Settings from './components/Settings';
import ExpenseState from './context/ExpenseState';
import UserState from './context/UserState';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <>
    <UserState>
    <ExpenseState>
      <Router>
     <Navbar />
     <Routes>
          <Route exact path="/" element={<Expenses />} />
          <Route exact path="/settings" element={<Settings />} />
           <Route exact path="/login" element={<Login />} />
           <Route exact path="/signup" element={<Signup />} />
        </Routes>
     
     </Router>
     </ExpenseState>
     </UserState>
    </>
  );
}

export default App;
