import React from 'react';

class RegistrationForm extends React.Component {
    state = {
        error: null,
        email: '',
        password: '',
        password_touched: '',
        repeat_password: '',
        dog_name: '',
        bring_home_date: '',
        dog_age: '',
        dog_breed: ''
    }

    handleSubmit = () => {
        // Post credentials
        // Render more info component
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
                            </form>
            </>
        )
    }
}

export default RegistrationForm;