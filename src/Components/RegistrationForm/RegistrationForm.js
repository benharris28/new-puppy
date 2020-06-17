import React from 'react';
import AuthApiService from '../../services/auth-api-service';

class RegistrationForm extends React.Component {
    state = {
        error: null,
        email: '',
        password: '',
        password_touched: '',
        repeat_password: '',
       
    }

    handleSubmit = (e) => {

        e.preventDefault(e);

        const { email, password } = this.state;

        const user = {
            email,
            password
        }

        this.setState({ error: null })

        AuthApiService.postUser(user)
            .then(res => {
                this.props.onRegistrationSuccess(res)
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
  
      updateRepeatPassword = (repeatPassword) => {
     
        this.setState({
          repeat_password: repeatPassword
        })
      }
    
    render() {
        const { error, repeat_password, password } = this.state;
        
        return (
           
                <>
                    <form 
                        id="registration-form"
                        onSubmit={e => this.handleSubmit(e)}>
                            
                            
                            
                            <div className="error-bar" role='alert'>
                                {error && <p className='red'>{error}</p>}
                            </div>
                            
                    
        
                            <div>
                                
                                <input 
                                type="email" 
                                name="email" 
                                placeholder="Email Address"
                                onChange={e => this.updateEmail(e.target.value)}
                                required />
                            </div>
                            
                            <div className="password-box">
                                
                                <input 
                                type="password" 
                                name="password" 
                                placeholder="Password"
                                onChange={e => this.updatePassword(e.target.value)}
                                required />
                                
                            </div>

                            <div>
                                
                                <input 
                                type="password" 
                                name="repeat_password" 
                                placeholder="Re-enter password" 
                                onChange={e => this.updateRepeatPassword(e.target.value)}
                                required /> 

                                
                            </div>
                            <div>
                                {repeat_password !== password ? <p>Passwords do not mach</p> : null}
                            </div>
                            <button
                                type="submit"
                                className="button"
                            >
                                Sign Up
                            </button>
                        </form>
            </>
        )
    }
}

export default RegistrationForm;