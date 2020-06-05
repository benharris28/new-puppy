import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../../Components/LoginForm/LoginForm';
import ApiContext from '../../ApiContext';



class LoginPage extends React.Component {
    static contextType = ApiContext;

    static defaultProps = {
        location: {},
        history: {
          push: () => {},
        },
      }

    
   
    

    handleLoginSuccess = (userType, loggedInUser) => {

        const { history } = this.props;
        
        history.push('/checklist')
       
    }

    render() {
        return (
            <section className="registration-login-page">
                <div className="newRegister">
                    {this.context.newUser === true && 
                        <p>Thank you for creating a new account! Please login below</p>}
                </div>
                <div className="login-form-container">
                    <LoginForm 
                        onLoginSuccess={this.handleLoginSuccess} />
                </div>
                <hr className="login-break"></hr>
                <div className="register">
                    <h5>New to New Puppy Checklist?</h5>
                    <p>It’s easy to set up your account. Register below</p>
                    <Link
                        to={'/register'}>
                            <button 
                                className="button">
                                Sign Up
                            </button>
                            
                    </Link>
                </div>
                <div className="tester-helper">

                    <h5>Working logins:</h5>
                    <p>For a user: testuser1@testy.com password: TestUser1! </p>
                    <p>For a walker: testwalker1@testy.com password: TestWalker1!</p>

                </div>

            </section>
        )
    }
}

export default LoginPage;