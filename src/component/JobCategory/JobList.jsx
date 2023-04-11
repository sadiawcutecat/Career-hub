import React from 'react';

const JobList = ({ jobCategoryList }) => {
    const { id, categoryLogo, categoryName, jobsAvailable } = jobCategoryList;

    return (
        <div>
             
                  
                    <div className='bg-slate-100 w-60 h-40 p-8 rounded'>
                        <img src={categoryLogo} alt="" />
                        <h4 className='font-bold mt-4 mb-1'>{categoryName}</h4>
                        <p>{jobsAvailable}</p>
                    </div>
        </div>
    );
};

export default JobList;