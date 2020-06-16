import React from 'react';
import ApiContext from '../../ApiContext';
import UsersApiService from '../../services/users-api-service'

class IntroForm extends React.Component {

    static contextType = ApiContext;

    state = {
        error: null,
        dog_name: '',
        home_date: '',
        dog_birthday: '',
        breed: '',
        questionNum: 1
    }

    handleSubmit = () => {
        // patch user table with dog info
        // Use context to access loggedInUser

        // Call handlecomplete in IntroPage route to redirect to checklist

        const { activeUser } = this.context
        
        const userId = activeUser.id

        const userUpdate = {
            dog_name: this.state.dog_name,
            home_date: this.state.home_date,
            dog_birthday: this.state.dog_birthday,
            breed: this.state.breed
        }

        UsersApiService.updateBio(userId, userUpdate)

        // create api service to patch dog intro
        this.context.updateDog()
    }

    updateDogName = (name) => {
        this.setState({
            dog_name: name
        })
    }

    handleBirthday(date) {
        this.setState({
            dog_birthday: date
        })
    }

    handleHomeDate(date) {
        this.setState({
            home_date: date
        })
    }


    updateBreed = (e) => {
        e.preventDefault()
       
        this.setState({
          breed: e.target.value
        })
      }
    
    nextQuestion = () => {
        this.setState({
            questionNum: this.state.questionNum + 1
        })
    }
    render() {
        
        const { error, questionNum } = this.state;
        console.log(this.state)
        
        return (
           
                <>
                    <form 
                        id="intro-form"
                        onSubmit={e => this.handleSubmit(e)}>
                            
                            
                            
                            <div className="error-bar" role='alert'>
                                {error && <p className='red'>{error}</p>}
                            </div>
                            
                    
                            {questionNum === 1 && 
                            <div id="questionOne">
                                <h6>What is your puppy's name?</h6>
                                <input 
                                type="text" 
                                name="dog-name" 
                                placeholder="Puppy's name"
                                onChange={e => this.updateDogName(e.target.value)}
                                required />
                                <button
                                    className="button"
                                    onClick={this.nextQuestion}>
                                    Next Question
                                </button>
                            </div>
                            }

                            {questionNum === 2 && 
                            <div>
                                <h6>What is {this.state.dog_name}'s date of birth?</h6>
                                <input 
                                type="date" 
                                name="date" 
                                placeholder="Age"
                                onChange={e => this.handleBirthday(e.target.value)}
                                required />

                                <button
                                    className="button"
                                    onClick={this.nextQuestion}>
                                    Next Question
                                </button>
                                
                            </div>
                            }

                            {questionNum === 3 &&
                            <div>
                                <h6>When is {this.state.dog_name} coming home?</h6>
                                <input 
                                type="date" 
                                name="date" 
                                placeholder="Age"
                                onChange={e => this.handleHomeDate(e.target.value)}
                                required />

                                <button
                                    className="button"
                                    onClick={this.nextQuestion}>
                                    Next Question
                                </button>
                                
                            </div>
                            }

                            {questionNum === 4 &&
                            <div>
                                <h6>What is {this.state.dog_name}'s breed?</h6>
                                <select 
                                    name="breed"
                                    id="breed"
                                    onChange={this.updateBreed}
                                    required
                                    >
                                    <option value="selectone" selected>Select Breed</option>
                                    <option value="Golden Retriever">Golden Retriever</option>
                                    <option value="Golden Doodle">Golden Doodle</option>
                                    <option value="Maltese">Maltese</option>
                                    <option value="Bernese Mountain Dog">Bernese Mountain Dog</option>
                                    
                                    
                                    
                                </select>
                                <button
                                    type="submit"
                                    className="button"
                                >
                                Submit
                            </button>
                                
                            </div>
                            
                            
                            }
                        </form>
            </>
        )
    }
}

export default IntroForm;