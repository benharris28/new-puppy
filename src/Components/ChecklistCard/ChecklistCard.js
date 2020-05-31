import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faSquare} from '@fortawesome/free-regular-svg-icons'
import dogCrate from '../../Photos/dogCrate.jpg'

class ChecklistCard extends React.Component {
    
    render() {
        return(
            <>
                <div className="tabs-intro">
                    <h5>Get the gear</h5>
                    <p>Fake Name, founder of Fake Pet Trainers, has listed out the following items as absolutely essential when bring home a new puppy!</p>
                </div>
                <div className="checklist-card">
                    
                        <div className="checklist-image-square">
                            <img src={dogCrate} alt="dog crate" className="checklist-image" />
                        </div>
                            
        
                   
                    <div className="checklist-card-content">
                        <div className="title-wrap">
                            <h6>Dog Crate</h6>
                            <p className="price">$100 - $150</p>
                        </div>
                        
                        <p>Essential for training your pup to sleep through the night</p>
                        <div className="button-container">
                            <div className="checklist-card-button">
                                <p>Buy this crate</p>
                            </div>
                            
                                <div className="checkmark-box">
                                        <div className="help-text">
                                            Mark done
                                        </div>
                                        <FontAwesomeIcon 
                                            className="square-icon-non-hover" 
                                            icon={faSquare}
                                            onClick={this.handleBackward}
                                        />
                                        
                                </div>
                            
                        </div>
                        

                    </div>


                </div>
            </>
        )
    }
}

export default ChecklistCard;