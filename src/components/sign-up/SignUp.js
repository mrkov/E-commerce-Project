import React, { Component } from 'react'
import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import './sign-up.styles.scss'

export default class SignUp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            displayName: '', 
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword){
            alert("passwords don't match")
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );

            await createUserProfileDocument(user, { displayName });
            this.setState({
                displayName: '', 
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            console.log('error creating user ',error)
        }       
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({[name]: value});

    }
    
    render() {

        const {displayName, email, password, confirmPassword } = this.state;

        return (
            <div className='sign-up'>
                <h1 className='title'>Sign up</h1>
                <h2>I don't have an account</h2>
                <span>Sign up with your email</span>

                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={email} 
                        handleChange={this.handleChange} 
                        required={true}  
                        label='email'                   
                    /> 

                    <FormInput 
                        name='displayName' 
                        type='text' 
                        value={displayName} 
                        handleChange={this.handleChange} 
                        required={true}  
                        label='display name'                   
                    /> 
                                     

                    <FormInput 
                        name='password' 
                        type='password' 
                        value={password} 
                        handleChange={this.handleChange} 
                        required={true}  
                        label='password'                       
                    />

                    <FormInput 
                        name='confirmPassword' 
                        type='password' 
                        value={confirmPassword} 
                        handleChange={this.handleChange} 
                        required={true}  
                        label='confirm password'                       
                    />                    
                    <CustomButton type='submit'> Sign up </CustomButton>                    
                </form>

                
            </div>
        )
    }
}
