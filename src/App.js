import './App.css';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import { useState } from 'react';

import Home from '../src/pages/Home';
import Store from 'pages/store/store';
import Community from './pages/Community';
import Services from 'pages/services/services';
import Preloader from './components/Preloader/Preloader';


function App() {
  const [appLoaded, setAppLoaded] = useState(false);
  
  return (
    <>
      <Preloader onComplete={() => setAppLoaded(true)} />
      
      <div 
        className={`transition-all duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)] min-h-screen ${
          appLoaded ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'
        }`}
      >
        <Router>
          <Routes>   
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/services" element={<Services />} />
            <Route path="Community" element={<Community />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
