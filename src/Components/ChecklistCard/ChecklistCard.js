import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faSquare, faCheckSquare } from '@fortawesome/free-regular-svg-icons'


class ChecklistCard extends React.Component {
    
    
    

    render() {
        const { image, category, brand, price, description, purchaseText, purchase_link } = this.props;
        
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

                        <a target='_blank' href={`${purchase_link}`}>
                            <div className="button-container">
                                <div className="checklist-card-button">
                                    <p>{purchaseText}</p>
                                </div>
                            </div>
                        </a>

                            
                                
                            
                       
                        

                    </div>


                </div>
            </>
        )
    }
}

export default ChecklistCard;