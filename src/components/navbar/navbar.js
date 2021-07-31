import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav-container'>
      <nav className="navbar navbar-expand-lg navbar-toggleable-sm">
        <div className="container-fluid d-flex justify-content-center">
          <div className="list-container">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="link" to='/' >Homepage</Link>
              </li>
              <li className="nav-item">
                <Link className="link" to='/newform' >New Job</Link>
              </li>
              <li className="nav-item">
                <Link className="link" to='https://drive.google.com/file/d/1E9aUY1U31kgjP0oyKnx6u50lXRhYZUSi/view?usp=sharing' >Resume</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Navbar;