import React, { useState } from 'react'

const CreateProject = () => {
    //STATE & VARIABLES
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    //EVENTS
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <div className='create-container'>
            <div className='create-form'>
                <form onSubmit={handleSubmit}>
                    <h5>Sign In</h5>
                    <div className='input-fields'>
                        <label>
                            <input
                                type='text'
                                placeholder='Title'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </label>
                        <label>
                            <textarea
                                type='text'
                                placeholder='Enter project details'
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            />
                        </label>
                    </div>
                    <button className='btn'>
                        Add Project
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CreateProject;