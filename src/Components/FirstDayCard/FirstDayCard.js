import React from 'react';

class FirstDayCard extends React.Component {
    render() {
        const { slug , title } = this.props;

        return(
            <>
                
                <div className="first-day-card">
                    <div className="day-card-link">
                        
                        <div className="first-day-item-description">
                            <div className="first-day-title">
                                <h5>{title}</h5>
                            </div>
                        </div>
                        <div className="link-to-page">
                            Get details
                        </div>
                    </div>
                </div>
                
            </>
        )
    }
}

export default FirstDayCard;

