import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './component/Layout/Main';
import Home from './component/Home/Home';




const routers = createBrowserRouter([
  {
    path: '/',
    element:<Main></Main>,
   children:[
      {
        path:'/',
        element:<Home></Home>,
        loader : () => fetch('jobList.json'),
      
      }
      

    ]


     
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={routers} />

  </React.StrictMode>,
)
