import React from 'react';

class ChecklistCard extends React.Component {
    render() {
        return(
            <>
                <div className="tabs-intro">
                    <h5>Tip from the pro</h5>
                    <p>Fake Name, founder of Fake Pet Trainers, has listed out the following items as absolutely essential when bring home a new puppy!</p>
                </div>
                <div className="checklist-card">
                    <div className="checklist-card-image">
                        <div className="stock-image"></div>
                    </div>
                    <div className="checklist-card-content">
                        <div className="title-wrap">
                            <h6>Dog Crate</h6>
                            <p className="price">$100 - $150</p>
                        </div>
                        
                        <p>Essential for training your pup to sleep through the night</p>
                        <div className="checklist-card-button">
                            <p>Buy this crate</p>
                        </div>

                    </div>


                </div>
            </>
        )
    }
}

export default ChecklistCard;