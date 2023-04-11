import React from 'react';
import { useLoaderData } from 'react-router-dom';
import JobDetails from './JobDetails';

const ViewDetails = () => {
    const jobDetails = useLoaderData();
    console.log(jobDetails);
    return (
        <div>
           <h2 className='text-3xl font-bold text-center mb-12'>Job Details</h2>
           {
            jobDetails.jobs.map(jobDetail => <JobDetails
            key={jobDetail.id}
            JobDetails={jobDetail}
            
            ></JobDetails>)
           }
        </div>
    );
};

export default ViewDetails;