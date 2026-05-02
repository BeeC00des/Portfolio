import './App.css';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';

import Home from '../src/pages/Home';
import Store from 'pages/store/store';
import Community from './pages/Community';
import Services from 'pages/services/services';


function App() {
  
  return (

    <Router>
      <Routes>   
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route path="/services" element={<Services />} />
      <Route path="Community" element={<Community />} />
      </Routes>
    </Router>

  );
}


export default App;
