import React,{ useState } from 'react';
import JobFeatureCart from '../JobFeatureCart/JobFeatureCart';
import { useLoaderData } from 'react-router-dom';

const HomePart = () => {
    const jobFeatures = useLoaderData();
    console.log(jobFeatures.jobFeature.jobs);
    // const [showCount, setShowCount] = useState(4);
    // const [featureDatas, setFeatureDatas] = useState([])
    // useEffect(() => {
    //     fetch('/public/jobFeature.json')
    //         .then(res => res.json())
    //         .then(data => setFeatureData(data))
    //     console.log(data);
    // }, [])

    return (

        <div className='mt-12'>
            <div className='text-center'>
                <h2 className='text-3xl font-semibold mb-5'>Featured Jobs</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='flex justify-center mt-8'>

                <div class=" grid grid-rows-3 grid-flow-col gap-1 ">
                    {
                        jobFeatures.jobFeature.jobs.map(jobfeature => <JobFeatureCart
                            key={jobfeature.id}
                            JobFeatureCart={jobfeature}
                        ></JobFeatureCart>)
                    }

                </div>
                
            </div>
            <div className='flex justify-center mt-5'>
            <button className='bg-purple-500 text-white font-bold p-3'>See All Jobs</button>
            </div>
        </div>



    );
};

export default HomePart;