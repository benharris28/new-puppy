import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faCheckSquare} from '@fortawesome/free-regular-svg-icons'
import ApiContext from '../../ApiContext';

class PrepHome extends React.Component {
    
    static contextType = ApiContext;
    
    componentDidMount() {
        // Update progress status from context
    }

    handleComplete = (page) => {
        this.context.handleProgress(page)
    }
    
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
                        onClick={() => this.handleComplete("prep_home")}>
                        <FontAwesomeIcon 
                            className="square-icon-non-hover" 
                            icon={faSquare}
                                                
                        />
                        <FontAwesomeIcon 
                            className="square-icon-checked" 
                            icon={faCheckSquare}
                                                
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