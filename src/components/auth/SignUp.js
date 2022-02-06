import React, { useState } from 'react'

const SignUp = () => {
    //STATE & VARIABLES
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lasatName, setLastName] = useState('');

    //EVENTS
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <div className='signup-container'>
            <div className='signup-form'>
                <form onSubmit={handleSubmit}>
                    <h5>Sign In</h5>
                    <div className='input-fields'>
                        <label>
                            <input
                                type='email'
                                placeholder='Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>
                        <label>
                            <input
                                type='password'
                                placeholder='Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                        <label>
                            <input
                                type='text'
                                placeholder='First Name'
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </label>
                        <label>
                            <input
                                type='text'
                                placeholder='Last Name'
                                value={lasatName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </label>
                    </div>
                    <button className='btn'>
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;