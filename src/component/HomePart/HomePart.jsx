import React, { useState } from 'react';
import JobFeatureCart from '../JobFeatureCart/JobFeatureCart';
import { useLoaderData } from 'react-router-dom';

const HomePart = () => {
    const jobFeatures = useLoaderData();
    const [visibleItems, setVisibleItems] = useState(4);


    return (

        <div className='mt-12'>
            <div className='text-center'>
                <h2 className='text-3xl font-semibold mb-5'>Featured Jobs</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='flex justify-center mt-8'>

                {/* <div class=" grid grid-rows-3 grid-flow-col gap-1 "> */}
                <div className="grid grid-cols-2 gap-4">
                    {
                        jobFeatures.jobFeature.jobs.slice(0, visibleItems).map(jobfeature => <JobFeatureCart
                            key={jobfeature.id}
                            JobFeatureCart={jobfeature}
                        ></JobFeatureCart>)
                    }

                </div>

            </div>
            <div className='flex justify-center mt-5'>
                <button className='bg-purple-500 text-white font-bold p-3' onClick={() => setVisibleItems(jobFeatures.jobFeature.jobs.length)}>
                    See All Jobs</button>
            </div>
        </div>

    );
};

export default HomePart;