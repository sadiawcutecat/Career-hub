import React from 'react';

const JobFeatureCart = ({JobFeatureCart}) => {
    const {company_logo, job_title, company_name, remote_or_onsite, location, fulltime_or_parttime, salary, job_description, job_responsibility, educational_requirements, experiences, contact_information, phone, email} = JobFeatureCart;
    console.log(JobFeatureCart);
    return (
         <div className='h-96 w-96 p-8 bg-slate-100 '>
         <img className='h-auto w-28' src={company_logo} alt="" />
          <h2 className='text-2xl font-bold my-2'>{job_title}</h2>
          <p>{company_name}</p>
          <div className='border-purple-600 text-purple-600 my-2 '>
            <button >{remote_or_onsite}</button>
            <button className='ms-4'>{fulltime_or_parttime}</button>
          </div>
          <div className='flex justify-between my-3'>
            <p>{location}</p>
            <p>Salary: {salary}</p>
          </div>
          <button className='bg-purple-500 text-white font-bold p-3'>View Details</button>
         </div>
        
    );
};

export default JobFeatureCart;