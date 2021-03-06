import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faCheckSquare} from '@fortawesome/free-regular-svg-icons'
import ApiContext from '../../ApiContext';

class Feeding extends React.Component {
    
    static contextType = ApiContext;
    
    state = {
        complete: ''
    }

    componentDidMount() {
        this.setState({
            complete: this.context.feeding_complete
        })
    }

    handleComplete = (page) => {
        this.setState({
            complete: true
        })
        this.context.handleProgress(page)
        this.context.handleFirstDayCounter()
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
        const { path } = this.props.match
        const pageName = `${path.substr(1)}_complete`
        console.log(pageName)
        console.log(this.state)
       
        return (
            <div>
                <div className="checklist-card-container">

                
                <h1>Feeding your new pup</h1>
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
                        onClick={() => this.handleComplete(pageName)}>
                        {this.renderIcon()}
                        
                    </div>
                </div>
                    
                    <Link to="/housetrain">
                        <button className="guide-button">
                            Up next: House training
                        </button>
                    </Link>
                </div>
            </div>
            </div>
        )
    }
}

export default Feeding;