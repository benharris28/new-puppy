import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight, faArrowCircleLeft} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { faSquare, faCheckSquare} from '@fortawesome/free-regular-svg-icons'
import FoodData from '../../BackupData/FoodData';
import FoodApiService from '../../services/food-api-service'
import ApiContext from '../../ApiContext';
import './FoodCard.css';


class FoodCard extends React.Component {
    
    static contextType = ApiContext;

    state = {
        selectedOption: 1,
        complete: '',
        foodItems: '',

    }

    componentDidMount = () => {
       
        FoodApiService.getAllFood()
            .then(res => {
                console.log(res)
                this.setFood(res)

                })

    }

    setFood = (res) => {
        this.setState({
            foodItems: res
        })
    }
    
    handleComplete = (page) => {
        this.setState({
            complete: true
        })
        this.context.handleProgress(page)
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

    renderIcon = () => {
        const { complete } = this.state;
        if (complete === true) {
            return  (
                <FontAwesomeIcon 
                className="square-icon-checked" 
                icon={faCheckSquare}
                                    
                /> 
            )
        } else {
            return (
                <FontAwesomeIcon 
                            className="square-icon-non-hover" 
                            icon={faSquare}
                                                
                        />
            )
        }
    }
    
    render() {
        const { selectedOption, foodItems } = this.state;
        const totalItems = foodItems.length;
        console.log(totalItems)
        const selectedFood = foodItems.find(selected => selectedOption == selected.food_id)
        console.log(selectedFood)
        console.log(this.state)
        const pageName = 'foodPage'
        
        
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
                <div className="next-checkpoint-box">
                    <div className="checkmark-box">
                        <div className="help-text">
                            Mark done
                        </div>
                        <div 
                            onClick={() => this.handleComplete(pageName)}>
                            {this.renderIcon()}
                            
                        </div>
                    </div>
                        
                        <Link to="/checklist">
                            <button className="guide-button">
                                Back to checklist
                            </button>
                        </Link>
                </div>

                
            </>
        )
    }
}

export default FoodCard;