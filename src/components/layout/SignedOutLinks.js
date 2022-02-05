import React from 'react'
//ROUTER
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
    return(
        <ul className='right'>
            <li>
                <NavLink to='/'>Sign up</NavLink>
            </li>
            <li>
                <NavLink to='/'>Log In</NavLink>
            </li>
        </ul>
    );
}

export default SignedOutLinks;