import React from 'react';
import { Link } from 'react-router-dom'
const resURL = 'https://drive.google.com/file/d/1E9aUY1U31kgjP0oyKnx6u50lXRhYZUSi/view?usp=sharing'

const Navbar = () => {
    return (
        <div className='nav-container bg-warning pb-1 mb-1'>
            <nav className="navbar navbar-expand-lg navbar-toggleable-sm">
                <div className="container-fluid d-flex justify-content-center">
                    <div className="list-container">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <Link className="link mx-2" to='/' >About Me</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="link mx-2" to='/mywork' >My Work</Link>
                            </li>
                            <li className="nav-item">
                                <a className="link mx-2" href={resURL} >Resume</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;