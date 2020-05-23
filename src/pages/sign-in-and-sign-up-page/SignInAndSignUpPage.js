import React from 'react'


import SignIn from '../../components/sign-in/SignIn'
import SignUp from '../../components/sign-up/SignUp'

import './sign-up-and-sign-in.styles.scss'

export default function SignInAndSignUpPage() {
    return (
        <div className='sign-up-and-sign-in'>
            <SignIn />
            <SignUp />
        </div>
    )
}
