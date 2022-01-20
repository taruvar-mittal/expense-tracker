
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

function App() {
  return (
    <>
    <ExpenseState>
      <Router>
     <Navbar />
     <Routes>
          <Route exact path="/" element={<Expenses />} />
          <Route exact path="/settings" element={<Settings />} />
        </Routes>
     
     </Router>
     </ExpenseState>
    </>
  );
}

export default App;
