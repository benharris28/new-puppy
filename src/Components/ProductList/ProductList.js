import React from 'react';
import ChecklistCard from '../../Components/ChecklistCard/ChecklistCard';
import ApiContext from '../../ApiContext';

class ProductList extends React.Component {
    
    static contextType = ApiContext;

    state = {
        dog_crate: true,
        dog_bowl: true,
        collar: true,
        leash: true,
        harness: true,
        poo_bags: true,
        tag: false,
        treats: false,
    }

    // Add patch to database

    handleCounter = () => {
        // Count true values in state
        // Pass true values to context in App.js
        
        const counter = Object.values(this.state).filter(Boolean).length
        this.context.handleProductCount(counter)
    }
    

    handleComplete = (item) => {
        if (item === "Dog Crate") {
            this.updateCrate()
        }

        if (item === "Dog Bowl") {
            this.updateBowl()
        }

        if (item === "Dog Collar") {
            this.updateCollar()
        }
        
    }
    updateCrate = () => {
        const { dog_crate } = this.state
        if (dog_crate === true) {
            this.setState({
                dog_crate: false
            })

        } else {
            if (dog_crate === false) {
                this.setState({
                    dog_crate: true
                })
            }
        }
    }

    updateBowl = () => {
        const { dog_bowl } = this.state
        if (dog_bowl === true) {
            this.setState({
                dog_bowl: false
            })

        } else {
            if (dog_bowl === false) {
                this.setState({
                    dog_bowl: true
                })
            }
        }
    }

    updateCollar = () => {
        const { collar } = this.state
        if (collar === true) {
            this.setState({
                collar: false
            })

        } else {
            if (collar === false) {
                this.setState({
                    collar: true
                })
            }
        }
    }
    
    render() {
        console.log(this.state)
        const counter = Object.values(this.state).filter(Boolean).length
        console.log(counter)
        const { products } = this.context;
        const activeProducts = products.filter(product => product.active === true)
        
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

export default ProductList;