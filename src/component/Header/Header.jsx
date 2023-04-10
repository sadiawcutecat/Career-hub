import React from 'react';

const Header = () => {
    return (
        <div>
            <div className='flex justify-between gap-x-60  bg-slate-50 p-2'>

                <h2 className='text-3xl font-bold'>jobHolder</h2>
                <div className='text-1xl text-gray-600 flex justify-around gap-12'>
                    <p>Statistics</p>
                    <p>Applied Jobs</p>
                    <p> Blog</p>
                </div>
                <button className='bg-purple-500 text-white font-bold p-2'>Star Applying</button>

            </div>
            <section className='flex justify-between  bg-slate-50'>
                <div className='mt-16 p-4'>
                    <h1 className='text-5xl font-bold my-8'>One Step <br /> Closer To Your <br /> <span className='text-purple-500'>Dream Job</span></h1>
                    <p className='my-8'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='bg-purple-500 text-white font-bold p-3'>Get Started</button>
                </div>
                <div>
                    <img className='h-auto w-auto mt-5' src="/src/component/Images/P3OLGJ1 copy 1.png" alt="" />
                </div>
            </section>

            <section>
                <div><h2>Job Category List</h2>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div>
                    <div>
                        <img src="/src/component/Images/Icons/accounts 1.png" alt="" />
                        <h4>Account & Finance</h4>
                        <p>300 Jobs Available</p>
                    </div>
                    <div>
                        <img src="/src/component/Images/Icons/business 1.png" alt="" />
                        <h4>Creative Design</h4>
                        <p>100+ Jobs Available</p>
                    </div>
                    <div>
                        <img src="/src/component/Images/Icons/social-media 1.png" alt="" />
                        <h4>Marketing & Sales</h4>
                        <p>150 Jobs Available</p>
                    </div>
                    <div>
                        <img src="/src/component/Images/Icons/chip 1.png" alt="" />
                        <h4>Engineering Job</h4>
                        <p>224 Jobs Available</p>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Header;