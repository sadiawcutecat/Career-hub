import React from 'react';

const JobDetails = ({JobDetails}) => {
    const { company_logo, job_title, company_name, remote_or_onsite, location, fulltime_or_parttime, salary, job_description, job_responsibility, educational_requirements, experiences, contact_information, phone, email } = JobDetails;
    return (
        <div className='flex justify-evenly'>
            <div>
              <p><span className='font-bold'>Job Description:</span>{job_description}</p>
              <p><span className='font-bold'>Job Responsibility:</span>{job_responsibility}</p>
              <p><span className='font-bold'>Educational Requirement:</span> <br />
              {educational_requirements}</p>
              <p><span className='font-bold'>Experience:</span> <br />
              {experiences}</p>
            </div>



            <div>
                 <h3>Job Details</h3>
                 <hr />
                 <p>Salary :{salary} </p>
                 <p>Job Title :{job_title} </p>
                 <h3>Contact Information</h3>
                 <hr />
                 <p>Phone :{phone}</p>
                 <p>Email :{email}</p>
                 <p>Address :{location}</p>
            </div>
            
        </div>
    );
};

export default JobDetails;