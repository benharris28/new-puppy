import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faSquare} from '@fortawesome/free-regular-svg-icons'
import dogCrate from '../../Photos/dogCrate.jpg'

class ChecklistCard extends React.Component {
    
    render() {
        const { image, category, brand, price, description, purchaseText, purchaes_link } = this.props;
        
            return (
            <> 
                
                <div className="checklist-card">
                    
                        <div className="checklist-image-square">
                            <img src={image} alt="product highlight" className="checklist-image" />
                        </div>
                            
        
                   
                    <div className="checklist-card-content">
                        <div className="title-wrap">
                            <h6>{category}</h6>
                            <p className="price">{price}</p>
                        </div>
                        
                        <p>{description}</p>
                        <div className="button-container">
                            <div className="checklist-card-button">
                                <p>{purchaseText}</p>
                            </div>
                            
                                <div className="checkmark-box">
                                        <div className="help-text">
                                            Mark done
                                        </div>
                                        <div
                                            onClick={() => this.props.handleComplete(category)}>
                                            <FontAwesomeIcon 
                                                className="square-icon-non-hover" 
                                                icon={faSquare}
                                            
                                        />
                                        </div>
                                        
                                        
                                </div>
                            
                        </div>
                        

                    </div>


                </div>
            </>
        )
    }
}

export default ChecklistCard;