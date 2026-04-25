import PropTypes from 'prop-types'
import Navbar from './Nav';
import Resume from '../../assets/images/ResumeSoft.pdf'

const Header = ({ title, onAdd}) => {

  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if(element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  return (
    <header className='header'>
      <div className='section1'>
        <h1 className="text" >{title}</h1>
      </div>
      <div className='section2'>
        <Navbar navItem="Project" onClick={() => scrollToElement('project-section')} />
        <Navbar navItem="Skill" onClick={() => scrollToElement('skill-section')} />
        <a href={Resume} download="MyResume" target='_blank' rel="noreferrer">
          <Navbar navItem="Resume" />
        </a>
        <Navbar navItem="Gallery" onClick={() => scrollToElement('gallery-section')} />
      </div>
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