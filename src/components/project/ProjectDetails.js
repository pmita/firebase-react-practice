import React from 'react'
//ROUTER
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
    //STATE & VARIABLES
    const { id } = useParams()
    console.log(id);

    return(
        <div className='project-details'>
            <div className='project-content'>
                <span className='card-title'>Project Title</span>
                <p>Lorem ipsum kjsiut for now</p>
            </div>
            <div className='project-action'>
                <p>Posted by Panos</p>
                <p>2nd September, 2am</p>
            </div>
        </div>
    );
}

export default ProjectDetails;