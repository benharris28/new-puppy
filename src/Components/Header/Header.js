import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

class Header extends React.Component {
    
    renderLogoutLink() {
        const { loggedInUser } = this.context;
       
      return (
      <>
        <div>
          <Link
            onClick={this.handleLogoutClick}
            to='/'
            className="textlink">
            Logout
          </Link>
          <Link to="/" aria-current="page" className="nav-link">Home</Link>
        </div>
        <div className="header-user-account">
          <Link
            to={`/checklist}`}
            className="textlink">
              My Checklist
          </Link>
        </div>
      </>
      )
    }
  
    renderLoginLink() {
      return (
        <div>
            <Link to="/" aria-current="page" className="nav-link">Home</Link>
            <Link to="/register" aria-current="page" className="nav-link">Register</Link>
            <Link to="/login" aria-current="page" className="nav-link">Login</Link>
          
        </div>
      )
    }
  
    
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
                                <Link to="/" aria-current="page" className="nav-link">Home</Link>
                                <Link to="/register" aria-current="page" className="nav-link">Register</Link>
                                <Link to="/login" aria-current="page" className="nav-link">Login</Link>
                            
                               
                            
                        </nav>
                    </div>
                </div>
            </div>
            
                                  
        )
    }
}

export default Header;