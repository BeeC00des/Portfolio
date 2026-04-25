const Navbar = ({ navItem, onClick }) => {
  return (
    <nav className='header' onClick={onClick}>
      <h1 className="navItem">{navItem}</h1>
    </nav>
  )
}

export default Navbar;