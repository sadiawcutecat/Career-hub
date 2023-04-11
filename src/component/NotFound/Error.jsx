import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';



const Error = () => {

    return (
      <>
      <div className='text-5xl font-bold  text-cyan-800 text-center my-32'>
         <p><FontAwesomeIcon icon={faXmarkCircle }/></p>
          <p>404</p>
          <p>Not Found</p>
    
        </div>
      </>
        
    );
};

export default Error;