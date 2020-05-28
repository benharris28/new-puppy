import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight, faArrowCircleLeft} from '@fortawesome/free-solid-svg-icons'
import './FoodCard.css';


class FoodCard extends React.Component {
    state = {
        selectedOption: 1
    }
    
    render() {
        return(
            <>
                <div className="checklist-intro">
                    <p>According to the experts, here are your options</p>
                </div>
                <div className="next-arrow">
                    <div className="arrow-container">
                        <button>
                            <FontAwesomeIcon className="arrow-icon" icon={faArrowCircleLeft} />
                        </button>
                        <h6>Option 1: Fresh Food</h6>
                        <button>
                            <FontAwesomeIcon className="arrow-icon" icon={faArrowCircleRight} />
                        </button>
                    </div>
                    

                </div>
                <div className="checklist-card">
                    <div className="checklist-card-image">
                        <div className="stock-image"></div>
                    </div>
                    <div className="checklist-card-content">
                        <div className="title-wrap">
                            <h6>Farmer's Dog</h6>
                            <p className="price">$300 per month (Estimate)</p>
                        </div>
                        
                        <p>Essential for training your pup to sleep through the night</p>
                        <div className="checklist-card-button">
                            <p>Subscribe to Farmer's Dog</p>
                        </div>

                    </div>


                </div>
            </>
        )
    }
}

export default FoodCard;