import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight, faArrowCircleLeft} from '@fortawesome/free-solid-svg-icons'
import FoodData from '../../BackupData/FoodData';
import './FoodCard.css';


class FoodCard extends React.Component {
    state = {
        selectedOption: 2
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
                    <p>According to the experts, here are your options</p>
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
                        <div className="stock-image"></div>
                    </div>
                    <div className="checklist-card-content">
                        <div className="title-wrap">
                            <h6>{selectedFood.brand}</h6>
                            <p className="price">{selectedFood.cost_small_dog}</p>
                        </div>
                        
                        <p>{selectedFood.description_text}</p>
                        <div className="checklist-card-button">
                            <p>{selectedFood.purchase_text}</p>
                        </div>

                    </div>


                </div>
            </>
        )
    }
}

export default FoodCard;