import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare} from '@fortawesome/free-regular-svg-icons'

class PrepHome extends React.Component {
    render() {
        return (
            <div>
                <div className="checklist-card-container">

                
                <h1>Prepare your home</h1>
                <div className="tabs-intro">
                    <h6>Main content section</h6>
                    <p>Test content to be filled in later!</p>
                </div>
                <div className="next-checkpoint-box">
                <div className="checkmark-box">
                    <div className="help-text">
                        Mark done
                    </div>
                    <div
                        onClick={() => this.props.handleComplete("category")}>
                        <FontAwesomeIcon 
                            className="square-icon-non-hover" 
                            icon={faSquare}
                                                
                        />
                    </div>
                </div>
                    
                    <Link to="/pick-up-pup">
                        <button className="guide-button">
                            Up next: Pick up pup
                        </button>
                    </Link>
                </div>
            </div>
            </div>
        )
    }
}

export default PrepHome;