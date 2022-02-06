import React, { useState } from 'react'

const SignIn = () => {
    //STATE & VARIABLES
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //EVENTS
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <div className='signin-container'>
            <div className='signin-form'>
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
                    </div>
                    <button className='btn'>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SignIn;