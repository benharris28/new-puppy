import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

class Header extends React.Component {
    render() {
        return (
            <div className="navbar">
                <div className="navigation-container">
                    <div className="navigation-left">
                        <Link to="/" aria-current="page" className="brand w-nav-brand w--current">
                            <img src="images/Logo.svg" width="40" alt="" />
                        </Link>
                    </div>
                    <div className="navigation-right">
                        <div className="menu-button w-nav-button">
                            <div className="icon w-icon-nav-menu"></div>
                        </div>
                        <nav 
                            role="navigation" 
                            className="nav-menu w-nav-menu">
                                <Link to="/" aria-current="page" className="nav-link w-nav-link w--current">Home</Link>
                                <Link to="/order" className="nav-link w-nav-link">Order</Link>
                                <Link to="/company" className="nav-link w-nav-link">Company</Link>
                                <Link to="/faq" className="nav-link w-nav-link">FAQ</Link>
                            
                        </nav>
                    </div>
                </div>
            </div>
            
                                  
        )
    }
}

export default Header;