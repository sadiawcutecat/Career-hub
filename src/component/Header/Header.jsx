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
           
        </div>
    );
};

export default Header;