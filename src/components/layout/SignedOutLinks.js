import React from 'react'
//ROUTER
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
    return(
        <ul className='right'>
            <li>
                <NavLink to='/signup'>Sign up</NavLink>
            </li>
            <li>
                <NavLink to='/signin'>Sign In</NavLink>
            </li>
        </ul>
    );
}

export default SignedOutLinks;