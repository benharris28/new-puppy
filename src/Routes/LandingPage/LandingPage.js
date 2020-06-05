import React from 'react'
import { Link } from 'react-router-dom'

class LandingPage extends React.Component {
    render() {
        return(
            <div id="header" className="header">
                <div className="container-flex">
                    <div className="hero-content">
                        <h1 className="hero-h1">
                            New Puppy Checklist
                        </h1>
                        <p className="hero-p">
                            Test
                        </p>
                        <div className="button-wrapper">
                            <Link to='/register'>

                            
                                <button 
                                        className="button">
                                    Start now
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="hero-image-wrap">
                        <img src="" className="hero-image" alt="" />
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingPage;