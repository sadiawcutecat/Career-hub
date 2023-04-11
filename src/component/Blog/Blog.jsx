import React from 'react';

const Blog = () => {
    return (
        <div className='bg-red-100 border-rose-500 rounded p-8'>
            <div className='my-5'>
                <h1 className='text-slate-700 text-3xl mb-3' >When should you use context API?</h1>
                <p>
                    Context provides a way to pass data through the component tree without having to pass props down manually at every level.
                    <span>You want to share data with many components at different nesting levels. (Like a theme, for example, when you change from white to black, all components need to switch their colors, icon, and so on)</span>

                    <span>When the state is changed by many components, in this case, it's complicated for each change to deliver the new data to other components manually. Making them connected to the same global state (one source of truth) will make the code cleaner and easy to maintain and debug.</span>

                </p>
            </div>
         



        </div>
    );
};

export default Blog;