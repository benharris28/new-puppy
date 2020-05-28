import React from 'react';
import ChecklistCard from '../../Components/ChecklistCard/ChecklistCard';
import FoodCard from '../../Components/FoodCard/FoodCard'
import './Checklist.css'

class Checklist extends React.Component {
    state = {
        openTab: 1
    }
    
    handleTabClick = (e) => {
        this.setState({
            openTab: e
        })
    }

    renderTabIntro = () => {
        
    }

    renderTab = () => {
        const { openTab } = this.state;
        if (openTab == 1) {
            return <ChecklistCard />
        }

        if (openTab == 2) {
            return <FoodCard />
        }
    }
    
    render() {
        const tabDisplay = this.renderTab();
        console.log(this.state)
        return(
            <div>
                <div className="page-header">
                    <div className="title-wrap">
                        <h1>Puppy Russell's Checklist</h1>
                    </div>
                    <div className="bring-home-date">
                        <p>Arriving home June 3rd!</p>
                    </div>
                </div>
                <div className="content">
                    <div className="container">
                        <div className="tabs">
                            <div className="tab-menu-title">
                                <h6>Get the gear (1/4)</h6>
                            </div>
                            <div className="tabs-menu">
                                <button 
                                    className="checklist-tab-button"
                                    value="1"
                                    onClick={e => this.handleTabClick(e.target.value)}>
                                    1
                                </button>
                                <button 
                                    className="checklist-tab-button"
                                    value="2"
                                    onClick={e => this.handleTabClick(e.target.value)}>
                                    2
                                </button>
                                <button 
                                    className="checklist-tab-button"
                                    value="3"
                                    onClick={e => this.handleTabClick(e.target.value)}>
                                    3
                                </button>
                                <button 
                                    className="checklist-tab-button"
                                    value="4"
                                    onClick={e => this.handleTabClick(e.target.value)}>
                                    4
                                </button>
                            </div>
                            <div className="tabs-content">
                                
                                <div className="checklist-card-container">
                                    
                                    
                                  
                                    {tabDisplay}
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