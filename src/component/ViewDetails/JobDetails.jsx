import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faCircleDollarToSlot, faCalendar, faPhone, faMailBulk} from '@fortawesome/free-solid-svg-icons';

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
                <div className='bg-sky-50 h-72 w-72 p-8'>
                <h3 className='font-bold mb-2'>Job Details</h3>
                 <hr />
                 <p><FontAwesomeIcon icon={faCircleDollarToSlot} />  <span className='font-bold'>Salary :</span>{salary} </p>
                 <p><FontAwesomeIcon icon={faCalendar} />  <span className='font-bold'>Job Title :</span>{job_title} </p>
                 <h3 className='font-bold mt-3 mb-2'>Contact Information</h3>
                 <hr />
                 <p><FontAwesomeIcon icon={faPhone} />  <span className='font-bold'>Phone :</span>{phone}</p>
                 <p><FontAwesomeIcon icon={faMailBulk} />  <span className='font-bold'>Email :</span>{email}</p>
                 <p><FontAwesomeIcon icon={faLocationDot} />  <span className='font-bold'>Address :</span>{location}</p>
                </div>
                 <div>
                    <button className='bg-purple-500 text-white font-bold p-3 w-72 mt-8 '>Apply Now</button>
                 </div>
            </div>
            
        </div>
    );
};

export default JobDetails;