import PropTypes from 'prop-types'
// import { useLocation } from 'react-router-dom'
// import Button from './Button'
import Navbar from './Nav';
import Resume from '../../assets/images/ResumeSoft.pdf'
import { Link } from 'react-router-dom';
// import Project from '../sections/project';



const Header = ({ title, onAdd}) => {
  // const location = useLocation()

  return (
    <header className='header'>
      <div className='section1'>
        <h1 className="text" >{title}</h1>
      </div>
      <div className='section2'>
      <Link to={{ pathname: '/Project'}}><Navbar navItem="Project" to /></Link> 
        <Navbar navItem="Skill" />
        <a href={Resume} download="MyResume" target='_blank' without rel="noreferrer">
          <Navbar navItem="Resume" />
        </a>
        <Navbar navItem="Gallery" />
      </div>
  
      {/* {location.pathname === '/' && (
        
        <Button
        color="green"
        text="Say Hello"
        onClick={onAdd}
      />
      )} */}
    </header>
  )
}

Header.defaultProps = {
  title: 'Beec00des',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header;