import './App.css';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Home from '../src/pages/Home';
import Store from 'pages/store/store';
import Community from './pages/Community';
import Services from 'pages/services/services';
import Preloader from './components/Preloader/Preloader';


function App() {
  const [appLoaded, setAppLoaded] = useState(false);
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    if (appLoaded) {
      window.scrollTo(0, 0);
      const timer = setTimeout(() => {
        setAnimationDone(true);
      }, 1000); // wait for transition to finish
      return () => clearTimeout(timer);
    }
  }, [appLoaded]);
  
  return (
    <>
      <Preloader onComplete={() => setAppLoaded(true)} />
      
      <div 
        className={`min-h-screen ${
          !appLoaded 
            ? 'translate-y-32 opacity-0 transition-all duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)]' 
            : animationDone 
              ? 'opacity-100' 
              : 'translate-y-0 opacity-100 transition-all duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)]'
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
