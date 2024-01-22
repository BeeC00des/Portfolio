// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route,Routes, } from 'react-router-dom';

import Home from '../src/pages/Home';
import Community from './pages/Community';


function App() {
  
  return (

    <Router>
      <Routes>   
      <Route path="/" element={<Home />}/>
      <Route path="Community" element={<Community />} />
      </Routes>
    </Router>

  );
}

{/* <Link to="/other">Go to Other Component</Link> */}
{/* <Route path="/other" element={<Others/>}/> */}

export default App;
