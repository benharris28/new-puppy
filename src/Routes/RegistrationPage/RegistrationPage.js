import React from 'react';
import { Link } from 'react-router-dom';
import RegistrationForm from '../../Components/RegistrationForm/RegistrationForm';
import ApiContext from '../../ApiContext';


// Make Login form and import

class RegistrationPage extends React.Component {
    static contextType = ApiContext;

    static defaultProps = {
        history: {
            push: () => {},
        }
    }

  
    handleRegistrationSuccess = (user) => {
        const { history } = this.props;
       
        this.context.handleNewRegistration()
        history.push('/login')
    }

    render() {
        return (
            <section className="registration-login-page">
                <div className="intro-box">
                    <h3>Start your checklist</h3>
                    <p>We just need a few details to get started</p>
                </div>
                <div>
                    <RegistrationForm 
                        onRegistrationSuccess={this.handleRegistrationSuccess}/>
                </div>
                <div className="login-redirect">
                    Already started a checklist?
                    <Link
                        to={'/login'}>
                            Click here to login
                    </Link>
                </div>

            </section>
        )
    }
}

export default RegistrationPage;