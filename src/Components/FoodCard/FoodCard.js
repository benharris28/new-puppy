import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight, faArrowCircleLeft} from '@fortawesome/free-solid-svg-icons'
import { faSquare} from '@fortawesome/free-regular-svg-icons'
import FoodData from '../../BackupData/FoodData';
import ApiContext from '../../ApiContext';
import './FoodCard.css';


class FoodCard extends React.Component {
    
    static contextType = ApiContext;

    state = {
        selectedOption: 2,
        foodComplete: false
    }

    handleComplete = () => {
        this.setState({
            foodComplete: true
        })
        this.context.handleFoodCounter()

    }

    handleCounter = () => {
        // Count true values in state
        // Pass true values to context in App.js

        const counter = Object.values(this.state).filter(Boolean).length
        this.context.handleProductCounter(counter)
    }

    handleForward = () => {
        this.setState({
            selectedOption: this.state.selectedOption + 1
        })
    }

    handleBackward = () => {
        this.setState({
            selectedOption: this.state.selectedOption - 1
        })
    }
    
    render() {
        const { selectedOption } = this.state;
        const totalItems = FoodData.food.length;
        console.log(totalItems)
        const selectedFood = FoodData.food.find(selected => selectedOption == selected.id)
        console.log(selectedFood)
        console.log(this.state)
        
        
        return(
            <>
                <div className="checklist-intro">
                    <p>Fake Name, a veterinary nutritionist, recommends finding the healthiest food that you can afford. Fresh food is easiest to digest. </p>
                    <p>Read more about nutrition here, or select a food below when ready</p>
                </div>

                <div className="next-arrow">
            
                    <div className="arrow-container">
                        {selectedOption > 1 &&
                        <button>
                            <FontAwesomeIcon 
                                className="arrow-icon" 
                                icon={faArrowCircleLeft}
                                onClick={this.handleBackward}
                                 />
                        </button>
                        }

                        <h6>{`Option ${selectedOption}: ${selectedFood.category}`}</h6>
                       
                       {selectedOption < totalItems && 
                        <button>
                            <FontAwesomeIcon 
                                className="arrow-icon" 
                                icon={faArrowCircleRight} 
                                onClick={this.handleForward}/>
                        </button>
                       }

                    </div>
                    

                </div>

                <div className="checklist-card">
                    <div className="checklist-card-image">
                        <div className="checklist-image-square">
                            <img src={selectedFood.image} alt="product highlight" className="checklist-image"/>
                        </div>
                    </div>
                    <div className="checklist-card-content">
                        <div className="title-wrap">
                            <h6>{selectedFood.brand}</h6>
                            <p className="price">{selectedFood.cost_small_dog}</p>
                        </div>
                        
                        <p>{selectedFood.description_text}</p>
                        <div className="food-card-button">
                            <p>{selectedFood.purchase_text}</p>
                        </div>

                    </div>


                </div>
                <div className="check-box-container">
                    <p>When you have selected a food, please mark this step as done</p>
                    <div className="checkmark-box-full">
                        <div className="help-text">
                            Mark done
                        </div>
                        <div
                            onClick={this.handleComplete}>
                                <FontAwesomeIcon 
                                    className="square-icon-non-hover" 
                                    icon={faSquare}
                                                
                                    />
                        </div>
                                            
                                            
                    </div>
                </div>

                
            </>
        )
    }
}

export default FoodCard;