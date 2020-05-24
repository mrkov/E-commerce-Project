import React, { Component } from 'react'
import FormInput from '../form-input/FormInput';

import './sign-in.styles.scss'
import CustomButton from '../custom-button/CustomButton';

import { auth, signInWtihGoogle } from '../../firebase/firebase.utils'

export default class SignIn extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email: '',
             password: ''
        }
    }
    
    handleSubmit = async event => {   
        event.preventDefault();

        const {email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password)
            
        }catch(error){
            alert(error.message)
        }
        this.setState({email: '', password: ''} )
    }

    handleChange = event => {
        const {name, value} = event.target;
        
        this.setState({[name]: value })
    }

    handleSignInWithGoogle = event => {
        event.preventDefault();

        signInWtihGoogle();
    }

    
    
    render() {
        return (
            <div className='sign-in'>
                <h1 className='title'>Sign in</h1>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={this.state.email} 
                        handleChange={this.handleChange} 
                        required={true}  
                        label='email'                   
                    />                  

                    <FormInput 
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        handleChange={this.handleChange} 
                        required={true}  
                        label='password'                       
                    />

                    <div className='buttons'>
                    <CustomButton type='submit'> Sign in </CustomButton>
                    <CustomButton isGoogleSignIn onClick={this.handleSignInWithGoogle} > {' '} Sign in with Google {' '}</CustomButton>
                    </div>
                </form>

                
            </div>
        )
    }
}
