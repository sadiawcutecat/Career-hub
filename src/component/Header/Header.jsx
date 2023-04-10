import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className='flex justify-between gap-x-60  bg-slate-50 p-2'>

                <h2 className='text-3xl font-bold'>jobHolder</h2>
                <div className='text-1xl text-gray-600 flex justify-around gap-12'>
                    <Link to="/Statistics">Statistics</Link>
                    <Link to="/AppliedJob">Applied Jobs</Link>
                    <Link to="/Blog">Blog</Link>
                </div>
                <button className='bg-purple-500 text-white font-bold p-2'>Star Applying</button>

            </div>
            <section className='flex justify-between  bg-slate-50 rounded p-8'>
                <div className='mt-16 p-4'>
                    <h1 className='text-5xl font-bold my-8'>One Step <br /> Closer To Your <br /> <span className='text-purple-500'>Dream Job</span></h1>
                    <p className='my-8'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='bg-purple-500 text-white font-bold p-3'>Get Started</button>
                </div>
                <div>
                    <img className='h-auto w-auto mt-5' src="/src/component/Images/P3OLGJ1 copy 1.png" alt="" />
                </div>
            </section>

            {/* <section className='mt-12'>
                <div className='text-center'>
                    <h2 className='text-3xl font-semibold'>Job Category List</h2>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='flex justify-between mt-12'>
                    <div className='bg-slate-100 w-60 h-40 p-8 rounded'>
                        <img src="/src/component/Images/Icons/accounts 1.png" alt="" />
                        <h4 className='font-bold mt-4 mb-1'></h4>
                        <p></p>
                    </div>
                    <div className='bg-slate-100 w-60 h-40 p-8 rounded'>
                        <img src="/src/component/Images/Icons/business 1.png" alt="" />
                        <h4 className='font-bold mt-4 mb-1'></h4>
                        <p></p>
                    </div>
                    <div className='bg-slate-100 w-60 h-40 p-8 rounded'>
                        <img src="/src/component/Images/Icons/social-media 1.png" alt="" />
                        <h4 className='font-bold mt-4 mb-1'></h4>
                        <p></p>
                    </div>
                    <div className='bg-slate-100 w-60 h-40 p-8 rounded'>
                        <img src= alt="" />
                        <h4 className='font-bold mt-4 mb-1'></h4>
                        <p></p>
                    </div>
                </div>
            </section> */}


        </div>
    );
};

export default Header;