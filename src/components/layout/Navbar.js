import React from 'react';
// ROUTER
import { Link } from 'react-router-dom';
//COMPONENT
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';


const Navbar = () => {
    return (
        <nav>
            <Link to='/' className='brand-logo'>
                MarioPlan
            </Link>
            <SignedInLinks />
            <SignedOutLinks />
        </nav>
    );
}

export default Navbar;