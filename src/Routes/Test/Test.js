import React from 'react';
import ChecklistCard from '../../Components/ChecklistCard/ChecklistCard';
import FoodCard from '../../Components/FoodCard/FoodCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import '../Checklist/Checklist.css'

class Test extends React.Component {
    state = {
        openTab: 1,
        tabOne: false,
        tabTwo: false,
        tabThree: false,
        tabFoud: false

    }
    
    handleTabOne = () => {
        const {tabOne} = this.state;
        if (tabOne) {

            this.setState({
                tabOne: false
            })
        }
        if (!tabOne) {
            this.setState({
                tabOne: true
            })
        }
    }

    handleTabTwo = () => {
        const {tabTwo} = this.state;
        if (tabTwo) {

            this.setState({
                tabTwo: false
            })
        }
        if (!tabTwo) {
            this.setState({
                tabTwo: true
            })
        }
    }

    handleTabThree = () => {
        const {tabThree} = this.state;
        if (tabThree) {

            this.setState({
                tabThree: false
            })
        }
        if (!tabThree) {
            this.setState({
                tabThree: true
            })
        }
    }

    handleTabFour = () => {
        const {tabFour} = this.state;
        if (tabFour) {

            this.setState({
                tabFour: false
            })
        }
        if (!tabFour) {
            this.setState({
                tabFour: true
            })
        }
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
        const { openTab, tabOne, tabTwo, tabThree, tabFour } = this.state;
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
                                <h6>Checklist Items</h6>
                            </div>
                            
                            <div className="tabs-menu-test">
                                <div 
                                    className="checklist-tab-button-test"
                                    onClick={e => this.handleTabOne("tabOne")}>
                                        <div className="tab-title">
                                            Get the gear
                                        </div>
                                    
                                        <div className="progress-tracker">
                                            5/8
                                        </div>
                                        <div className="dropdown-icon">
                                            <FontAwesomeIcon 
                                            className="arrow-icon" 
                                            icon={faChevronRight}
                                            onClick={this.handleBackward}
                                            />
                                        </div>
                                </div>
                                {tabOne &&
                                <div className="tabs-content">
                                
                                <div className="checklist-card-container">
                                  {}  
                            
                                  
                                    <ChecklistCard />
                                </div>
                                </div>
                                }


                                 <div 
                                    className="checklist-tab-button-test"
                                    onClick={e => this.handleTabTwo("tabTwo")}>
                                        <div className="tab-title">
                                            Find the right food
                                        </div>
                                    
                                        <div className="progress-tracker">
                                            5/8
                                        </div>
                                        <div className="dropdown-icon">
                                            <FontAwesomeIcon 
                                                className="arrow-icon" 
                                                icon={faChevronRight}
                                                onClick={this.handleBackward}
                                            />
                                        </div>
                                </div>
                                {tabTwo &&
                                <div className="tabs-content">
                                
                                <div className="checklist-card-container">
                                    
                                    
                                  
                                    <FoodCard />
                                </div>
                                </div>
                                }
                                
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Test;