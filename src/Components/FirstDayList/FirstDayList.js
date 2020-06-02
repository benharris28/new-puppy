import React from 'react';
import FirstDayCard from '../../Components/FirstDayCard/FirstDayCard';
import ApiContext from '../../ApiContext';

class FirstDayList extends React.Component {
    
    static contextType = ApiContext;

    state = {
      
    }

    // Add patch to database

    handleCounter = () => {
        // Count true values in state
        // Pass true values to context in App.js

        const counter = Object.values(this.state).filter(Boolean).length
        this.context.handleProductCounter(counter)
    }
    

    handleComplete = (item) => {
      
        
    }

    
    render() {
        
        
        
        return (
            
            <div className="tabs-content">
                <div className="tabs-intro">
                    <h5>24 hour survival guide</h5>
                    <p>Fake Name, founder of Fake Pet Trainers, gives you the most important tips on starting out right</p>
                </div>
                                
                <div className="checklist-card-container">
                    
                          <FirstDayCard />  
                                  
                                   
                </div>
            </div>
        )
        


    }
    
}

export default FirstDayList;