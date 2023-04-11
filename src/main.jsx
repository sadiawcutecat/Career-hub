import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './component/Layout/Main';
import Home from './component/Home/Home';
import HomePart from './component/HomePart/HomePart';
import Statistics from './component/Statistics/Statistics';
import AppliedJob from './component/Applied-Job/AppliedJob';
import Blog from './component/Blog/Blog';




const routers = createBrowserRouter([
  {
    path: '/',
    element:<Main></Main>,
   children:[
      {
        path:'/',
        element:<Home></Home>,
        loader : () => fetch('jobList.json'),
      },
      // 
      // {
      //   path:'/',
      //   element:<HomePart></HomePart>,
      //   loader : () => fetch('jobFeature.json'),
      
      // }
      {
        path:'/Statistics',
        element:<Statistics></Statistics>
       
      },
      {
        path:'/AppliedJob',
        element:<AppliedJob></AppliedJob>
       
      },
      {
        path:'/Blog',
        element:<Blog></Blog>
        
       
      },

    ]


     
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={routers} />

  </React.StrictMode>,
)
