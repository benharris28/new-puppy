import React from 'react';

class IntroForm extends React.Component {
    state = {
        error: null,
        dog_name: '',
        bring_home_date: '',
        dog_birthday: '',
        dog_breed: '',
        questionNum: 1
    }

    handleSubmit = () => {
        this.context.updateDog()
    }

    updateDogName = (name) => {
        this.setState({
            dog_name: name
        })
    }

    handleDate(date) {
        this.setState({
            date
        })
    }

    updateBreed(date) {
        this.setState({
            date
        })
    }
    
    nextQuestion = () => {
        this.setState({
            questionNum: this.state.questionNum + 1
        })
    }
    render() {
        const { error } = this.state;
        
        return (
           
                <>
                    <form 
                        id="intro-form"
                        onSubmit={e => this.handleSubmit(e)}>
                            
                            
                            
                            <div className="error-bar" role='alert'>
                                {error && <p className='red'>{error}</p>}
                            </div>
                            
                    
        
                            <div>
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
                                    Submit
                                </button>
                            </div>
                            
                            <div>
                                <h6>What is {this.state.dog_name}'s date of birth?</h6>
                                <input 
                                type="date" 
                                name="date" 
                                placeholder="Age"
                                onChange={e => this.handleDate(e.target.value)}
                                required />
                                
                            </div>

                            <div>
                                <h6>When is {this.state.dog_name} coming home?</h6>
                                <input 
                                type="date" 
                                name="date" 
                                placeholder="Age"
                                onChange={e => this.handleDate(e.target.value)}
                                required />
                                
                            </div>

                            <div>
                                <h6>What is {this.state.dog_name}'s breed?</h6>
                                <select 
                                    name="breed"
                                    id="breed"
                                    onChange={this.updateBreed}
                                    required
                                    >
                                    <option value="selectone" selected>Select Breed</option>
                                    <option value="user">Golden Retriever</option>
                                    <option value="walker">Golden Doodle</option>
                                    <option value="walker">Maltese</option>
                                    <option value="walker">Bernese Mountain Dog</option>
                                    
                                    
                                    
                                </select>

                                
                            </div>
                            
                            <button
                                type="submit"
                                className="button"
                            >
                                Submit
                            </button>
                        </form>
            </>
        )
    }
}

export default IntroForm;