import React from 'react';
import FirstDayCard from '../../Components/FirstDayCard/FirstDayCard';
import { Link } from 'react-router-dom';
import ApiContext from '../../ApiContext';

class FirstDayList extends React.Component {
    
    static contextType = ApiContext;

    state = {
      prep_home: false,
      pick_up_pup: false,
      tricks: false,
      first_meal: false,
      house_train: false
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
        const pages = [
            {
                slug: '/preparehome',
                page_title: "Prepare your home",
                next_page: '/pick-up-pup'
            },
            {
                slug: '/pickup',
                page_title: "Pick up your puppy",
                next_page: '/tricks'
            },
            {
                slug: '/tricks',
                page_title: "Teach a few tricks",
                next_page: '/feeding'
            },
            {
                slug: '/feeding',
                page_title: "Puppy's first meal",
                next_page: '/house-training'
            },
            {
                slug: '/housetrain',
                page_title: "House training",
                next_page: null
            },
        ]
        
        
        return (
            
            <div className="tabs-content">
                <div className="tabs-intro">
                    <h5>24 hour survival guide</h5>
                    <p>Fake Name, founder of Fake Pet Trainers, gives you the most important tips on starting out right</p>
                </div>
                                
                <div className="checklist-card-container">
                    
                         {pages.map(page => <Link to={page.slug}>
                                                    <FirstDayCard 
                                                        key={page.slug} 
                                                        slug={page.slug}
                                                        title={page.page_title}
                                                        next={page.next_page} 
                                                        />
                                            </Link> )
                                            } 
                                  
                                   
                </div>
            </div>
        )
        


    }
    
}

export default FirstDayList;