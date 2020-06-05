import React from 'react';
import ApiContext from '../../ApiContext';



class LoginForm extends React.Component {
    
    static contextType = ApiContext;
    
    static defaultProps = {
        onLoginSuccess: () => {}
      }

      state = {
          email: '',
          password: '',
          error: null
      }
    
      
    handleApiSubmit = (e) => {
        this.props.onLoginSuccess()
    }
    

    updateEmail = (email) => {
        this.setState({
            email: email
        })
    }

    updatePassword = (password) => {
        this.setState({
            password: password
        })
    }

    getLoggedInUser = (users=[], email) => {
        
        return users.find(user => user.email == email)

        
    }
    
    render() {
        const { error } = this.state;
        
        
        return (
            <>
                <form 
                    className="login form"
                    onSubmit={this.handleApiSubmit}
                    >
                    <h2 className="form-title">
                        Login
                    </h2>
                    <h3>
                        Existing users
                    </h3>
                    <div className="error-bar" role='alert'>
                        {error && <p className='red'>{error}</p>}
                    </div>
                    <div>
                        
                        <input 
                            type="text" 
                            name="email" 
                            placeholder="Email"
                            onChange={e => this.updateEmail(e.target.value)}
                            required />
                    </div>
                    <div>
            
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Password"
                            onChange={e => this.updatePassword(e.target.value)} 
                            required />
                    </div>
                    <div className="button-box">
                        <button
                            type="submit"
                            className="button">
                            
                                Sign In
                        </button>
                    </div>
                    
            </form>

            
        </>
        )
    }
}

export default LoginForm;