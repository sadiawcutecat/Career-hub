import React from 'react';
import JobFeatureCart from '../JobFeatureCart/JobFeatureCart';
import { useLoaderData } from 'react-router-dom';

const HomePart = () => {
    const jobFeatures = useLoaderData();
    console.log(jobFeatures.jobFeature.jobs);
 // const [featureDatas, setFeatureDatas] = useState([])
    // useEffect(() => {
    //     fetch('/public/jobFeature.json')
    //         .then(res => res.json())
    //         .then(data => setFeatureData(data))
    //     console.log(data);
    // }, [])

    return (
        <div className='flex justify-'>

          
            {
                jobFeatures.jobFeature.jobs.map(jobfeature => <JobFeatureCart
                key={jobfeature.id}
                JobFeatureCart={jobfeature}
                ></JobFeatureCart>)
            }
           
        </div>
    );
};

export default HomePart;