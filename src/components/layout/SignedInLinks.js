import React from 'react'
//ROUTER
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return(
        <ul className='right'>
            <li>
                <NavLink to='/'>New Project</NavLink>
            </li>
            <li>
                <NavLink to='/'>Log Out</NavLink>
            </li>
            <li>
                <NavLink to='/' className='navbar-account'>NN</NavLink>
            </li>
        </ul>
    );
}

export default SignedInLinks;