import React from 'react';
import ApiContext from '../../ApiContext';
import AuthApiService from '../../services/auth-api-service';
import TokenService from '../../services/token-service'



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
        e.preventDefault()
        const { email, password } = this.state;

        this.setState({ error: null})

        AuthApiService.postLogin({
            email: email,
            password: password,
        })

        .then(res => {
            TokenService.saveAuthToken(res.authToken)
            const user = res.dbUser;
            this.context.handleActiveUser(user)
            this.props.onLoginSuccess()
        })
        .catch(res => {
            this.setState({ error: res.error })
        })

        
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
        const { users } = this.context;
        const loggedInUser = this.getLoggedInUser()
        console.log(error)
        
        
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