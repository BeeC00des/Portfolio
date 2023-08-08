const Navbar = ({ navItem}) => {
//   const location = useLocation()

  return (
    <nav className='header'>
      <h1 className="navItem">{navItem}</h1>
    </nav>
  )
}

export default Navbar;