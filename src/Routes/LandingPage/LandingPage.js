import React from 'react'

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
                            <button className="button">
                                Start now
                            </button>
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