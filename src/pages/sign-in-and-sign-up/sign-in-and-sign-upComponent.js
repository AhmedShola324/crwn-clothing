import React from 'react'

import SignIn from '../../components/sign-in/sign-inComponent'
import SignUp from '../../components/sign-up/sign-upComponent'
import "./sign-in-and-sign-upStyle.scss"

const signInAndSignUpPage = () => {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default signInAndSignUpPage;