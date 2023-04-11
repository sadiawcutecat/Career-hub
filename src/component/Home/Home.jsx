import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import JobList from '../JobCategory/JobList';
import HeaderPart from '../HeaderPart/HeaderPart';

const Home = () => {

    const jobCategoryLists = useLoaderData();

    return (
        <div>
            <HeaderPart></HeaderPart>
            <div className='mt-12'>
                <div className='text-center'>
                    <h2 className='text-3xl font-semibold mb-5'>Job Category List</h2>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>

                <div className='flex justify-center gap-8 mt-8'>
                    {
                        jobCategoryLists.map(jobCategoryList => <JobList
                            key={jobCategoryList.id}
                            jobCategoryList={jobCategoryList}
                        ></JobList>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Home;