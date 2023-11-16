import React from 'react'

const NavBar = () => {
  return (
    <div className='navBox'>
      <ul className="nav justify-content-center">
      <li className="nav-item">
    <a className="nav-link" href='/' style={{marginLeft:-550}}>Rohan Raghav</a>
  </li>
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="/About">About</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/Skills">Skills</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/Projects">Projects</a>
  </li>
</ul>
    </div>
  )
}

export default NavBar
