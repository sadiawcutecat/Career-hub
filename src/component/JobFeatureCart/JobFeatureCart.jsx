import React from 'react';

const JobFeatureCart = ({JobFeatureCart}) => {
    const {company_logo, job_title, company_name, remote_or_onsite, location, fulltime_or_parttime, salary, job_description, job_responsibility, educational_requirements, experiences, contact_information, phone, email} = JobFeatureCart;
    return (
        <div>
            <h2>{job_title}</h2>
        </div>
    );
};

export default JobFeatureCart;