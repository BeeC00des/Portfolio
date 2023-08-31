// import logo from './logo.svg';
import './App.css';

// Route, Routes
// import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/layouts/Header';
import Button from './components/Buttons/specialBtn';
import Footer from './components/layouts/Footer';
import About from './components/sections/About';
import Skill from './components/sections/skillset';
import Project from './components/sections/project';
import Story from './components/sections/story';
import Social from './components/sections/social'

function App() {
  return (
    <Router>
      <div className='main'>
      <Button
        text="Say Hello!"
      />
      </div>
       
      <Header title="BeeC00des"/>
      <About  
      mainText="Hello!"  
      subText="I'm Bolarinwa Ajayi"

      text1="A creative 
      Software Developer skilled at frontend engineering  for webs service 
      crafting responsive and beautiful user interface 
      embedded with great functionalities and interact with web servers." 

      text2="
      I'm passionate about innovating software solutions and impacting my community. 
      I have three years experience working and volunteering 
      for organizations. Check my Works" />

      <Skill mainText="Skill"/>
      <Project mainText="Projects" />

      <Story mainText="Experiences & volunteering" paraText="passionate and lives"/>

      <Social  
      mainText="Get In Touch"  
      subText= "I'm Avaliable for collaboration" />

      <Footer footerItem="Made with ❤️ from Beec00des"/>
      <div class="footerList">
        <Footer footerItem="Reactjs" />
        <Footer footerItem="Github"/>
        <Footer footerItem="Git"/>
        <Footer footerItem="Netlify"/>
      </div>
    </Router>
    
  );
}

export default App;
