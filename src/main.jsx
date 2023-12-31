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
import Error from './component/NotFound/Error';
import ViewDetails from './component/ViewDetails/ViewDetails';





const routers = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: (
          <>
            <Home></Home>
            <HomePart></HomePart>
          </>
        ),
        loader: async () => {
          const [jobList, jobFeature] = await Promise.all([
            fetch('/jobList.json').then(res => res.json()),
            fetch('/jobFeature.json').then(res => res.json())
          ]);
      
          return { jobList, jobFeature };
        }
      },
      {
        path:'/ViewDetails/:jobId',
        element: <ViewDetails></ViewDetails>,
        loader: () => fetch('jobFeature.json'),

      },
      {
        path: '/Statistics',
        element: <Statistics></Statistics>

      },
      {
        path: '/AppliedJob',
        element: <AppliedJob></AppliedJob>,
        // loader: () => fetch('jobFeature.json'),

      },
      {
        path: '/Blog',
        element: <Blog></Blog>


      },
      {
        path: '*',
        element:<Error></Error>
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={routers} />

  </React.StrictMode>,
)
