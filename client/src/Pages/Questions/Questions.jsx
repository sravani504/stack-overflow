import React from 'react';
import Homemainbar from "../../components/Homemainbar/Homemainbar";
import Leftsidebar from '../../components/Leftsidebar/Leftsidebar';
import Rightsidebar from '../../components/Rightsidebar/Rightsidebar';
import '../../App.css'

const Questions = () => {
    return (
        <div className='home-container-1'>
            <Leftsidebar />
            <div className='home-container-2'>
                <Rightsidebar  />
                <Homemainbar />
            </div>
        </div>

    );
}

export default Questions;
