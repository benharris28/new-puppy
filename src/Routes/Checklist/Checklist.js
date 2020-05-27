import React from 'react'
import './Checklist.css'

class Checklist extends React.Component {
    render() {
        return(
            <div>
                <div className="page-header">
                    <div className="title-wrap">
                        <h1>Puppy Russell's Checklist</h1>
                    </div>
                </div>
                <div className="content">
                    <div className="container">
                        <div className="tabs">
                            <div className="tab-menu-title">
                                <h6>Get the gear (1/4)</h6>
                            </div>
                            <div className="tabs-menu">
                                <button className="checklist-tab-button">
                                    1
                                </button>
                                <button className="checklist-tab-button">
                                    2
                                </button>
                                <button className="checklist-tab-button">
                                    3
                                </button>
                                <button className="checklist-tab-button">
                                    4
                                </button>
                            </div>
                            <div className="tabs-content">
                                <div className="checklist-card-container">
                                    <div className="checklist-card">
                                        <div className="checklist-card-image">
                                            <div className="stock-image"></div>
                                        </div>
                                        <div className="checklist-card-content">
                                            <div className="title-wrap">
                                                <h6>Dog Crate</h6>
                                                <p className="price">$100 - $150</p>
                                            </div>
                                            
                                            <p>Essential for training your pup to sleep through the night</p>
                                            <div className="checklist-card-button">
                                                <p>Buy this crate</p>
                                            </div>

                                        </div>

                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Checklist;