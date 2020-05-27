import React from 'react'
import './Checklist.css'

class Checklist extends React.Component {
    render() {
        return(
            <div>
                <div className="header">
                    <div className="title-wrap">
                        <h1>Puppy Russell's Checklist</h1>
                    </div>
                </div>
                <div className="content">
                    <div className="container">
                        <div className="tabs">
                            <div className="tabs-menu">
                                <button className="checklist-tab-button">
                                    Gear
                                </button>
                                <button className="checklist-tab-button">
                                    Food
                                </button>
                                <button className="checklist-tab-button">
                                    Vet
                                </button>
                                <button className="checklist-tab-button">
                                    Read
                                </button>
                            </div>
                            <div className="tabs-content">
                                <div className="checklist-card-container">
                                    <div className="checklist-card">
                                        <div className="checklist-card-image"></div>
                                        <div className="checklist-card-content">
                                            <p>Test info about dog crates</p>
                                        </div>

                                        <div className="checklist-card-button">
                                            Buy this crate
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