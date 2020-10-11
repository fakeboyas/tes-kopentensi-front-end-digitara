import React from 'react'
import steam from '../../assets/images/icons/socialmedia/steam.png'

function SignIn() {
    return (
        <div className="btn btn-success w-25 d-flex flex-column align-items-center">
            <img src={steam} alt="logo" style={{width: "50px"}} />
            <span className="text-light font-weight-bold">Sign in through STEAM</span>
           
        </div>
    )
}

export default SignIn
