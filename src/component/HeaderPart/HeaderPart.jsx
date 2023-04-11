import React from 'react';

const HeaderPart = () => {
    return (
        <div>
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
            
        </div>
    );
};

export default HeaderPart;