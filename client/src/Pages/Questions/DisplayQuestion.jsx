import React from 'react';
import LeftSidebar from '../../components/Leftsidebar/Leftsidebar';
import Rightsidebar from '../../components/Rightsidebar/Rightsidebar';
import QuestionsDetails from './QuestionsDetails';
const DisplayQuestion = () => {
  return (
    <div>
      <div className='home-container-1'>
            <LeftSidebar />
            <div className='home-container-2'>
                <QuestionsDetails />
                <Rightsidebar />
            </div>
        </div>
    </div>
  );
}

export default DisplayQuestion;
