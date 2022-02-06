import React from 'react'
//COMPONENTS
import ProjectList from '../project/ProjectList';
import Notifications from './Notifications';

const Dashboard = () => {
    return(
            <div className='dashboard'>
                <div className='container-left'>
                    <ProjectList />
                </div>
                <div className='container-right'>
                    <Notifications />
                </div>
            </div>
        );
}

export default Dashboard;