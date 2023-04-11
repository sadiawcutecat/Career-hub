import React from 'react';
import JobFeatureCart from '../JobFeatureCart/JobFeatureCart';

const HomePart = () => {
    // const jobFeatures = useLoaderData();
    // console.log(jobFeatures);
 // const [featureDatas, setFeatureDatas] = useState([])
    // useEffect(() => {
    //     fetch('/public/jobFeature.json')
    //         .then(res => res.json())
    //         .then(data => setFeatureData(data))
    //     console.log(data);
    // }, [])

    return (
        <div>
            <h1>here it is:{jobFeatures.length}</h1>
            {
                jobFeatures.map(jobFeature => <JobFeatureCart
                key={jobFeature.id}
                JobFeatureCart={JobFeatureCart}
                ></JobFeatureCart>)
            }
        </div>
    );
};

export default HomePart;