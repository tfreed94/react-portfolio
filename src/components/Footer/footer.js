import React from 'react';


const Footer = () => {
    return (
        <footer className="fixed-bottom bg-warning d-flex justify-content-between flex-md-row">
            <p className="text-dark">
                Tfreedwebdev94@gmail.com | (330)-840-0979
            </p>
            <div className="d-flex footer">
                <a className=" mx-2" href='mailto:tfreedwebdev94@gmail.com'>
                    <h1><i className="bi bi-envelope-fill"></i></h1>
                </a>
                <a className="nav-item nav-link p-0 mx-2" href="https://github.com/tfreed94"
                    rel="noopener noreferrer" target="blank">
                    <h1><i className="bi bi-github"></i></h1>
                </a>
                <a className="nav-item nav-link p-0 mx-2" href="https://www.linkedin.com/in/troy-freed-jr-737635206/"
                    rel="noopener noreferrer" target="blank">
                    <h1><i className="bi bi-linkedin"></i></h1>
                </a>
            </div>
        </footer>
    )
}
export default Footer;
