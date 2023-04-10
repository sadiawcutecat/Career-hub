import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const jobcategaryList = useLoaderData();
    return (
        <div>
            <h1>list: {jobcategaryList.length}</h1>
        </div>
    );
};

export default Home;