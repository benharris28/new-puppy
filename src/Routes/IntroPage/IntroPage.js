import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faCheckSquare} from '@fortawesome/free-regular-svg-icons'
import IntroForm from '../../Components/IntroForm/IntroForm'
import ApiContext from '../../ApiContext';

class IntroPage extends React.Component {
    
    static contextType = ApiContext;
    
    static defaultProps = {
        location: {},
        history: {
          push: () => {},
        },
      }

    state = {
        complete: ''
    }

    

    handleComplete = () => {
        
        // Redirect user to checklist
        const { history } = this.props;
        console.log(history)
        history.push('/checklist')
    }
    
    
    render() {
        const { path } = this.props.match
        const pageName = path.substr(1)
       
        return (
            <div>
                <div className="checklist-card-container">

                
                <h1>Let's hear a bit more about this puppy...</h1>
                <div className="tabs-intro">
                    <h6>Main content section</h6>
                    <p>Test content to be filled in later!</p>
                </div>
                <div>
                    <IntroForm introSuccess={this.handleComplete}/>
                </div>
                
            </div>
            </div>
        )
    }
}

export default IntroPage;