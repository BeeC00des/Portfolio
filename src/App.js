// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route,Routes, } from 'react-router-dom';

import Home from '../src/pages/Home';
import Community from './pages/Community';
import Test from './pages/test';


function App() {
  
  return (

    <Router>
      <Routes>   
      <Route path="/" element={<Home />}/>
      <Route path="/test" element={<Test />}/>
      <Route path="Community" element={<Community />} />
      </Routes>
    </Router>

  );
}


export default App;
