import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import JobDetails from './JobDetails';

const ViewDetails = () => {
    const jobDetails = useLoaderData();
    const {jobId} = useParams();
    const job = jobDetails.jobs.filter(job =>job.id.toString() == jobId );
        
        console.log(job); 
    
    

    
    return (
        <div>
           <h2 className='text-3xl font-bold text-center mb-16 mt-8'>Job Details</h2>
           {
            
            <JobDetails
                key={job.id}
                JobDetails={job}
                
                ></JobDetails>
           }
        </div>
    );
};

export default ViewDetails;