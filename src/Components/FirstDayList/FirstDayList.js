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
                    <h5>Get the gear</h5>
                    <p>Fake Name, founder of Fake Pet Trainers, has listed out the following items as absolutely essential when bring home a new puppy!</p>
                </div>
                                
                <div className="checklist-card-container">
                    {activeProducts.map(product => 
                                    <ChecklistCard 
                                        key={product.category}
                                        image={product.image} 
                                        category={product.category}
                                        brand={product.brand}
                                        price={product.price}
                                        description={product.description_text}
                                        purchaseText={product.purchase_text}
                                        purchaes_link={product.canada_link}
                                        handleComplete={this.handleComplete}
                                         />)}  
                            
                                  
                                   
                                </div>
                                </div>
        )
        


    }
    
}

export default FirstDayList;