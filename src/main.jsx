
import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// import {RouterProvider , createBrowserRouter} from 'react-router-dom'

// const routers = createBrowserRouter([
//   {
// path:'/',
// element: <App/>
// // children:[


// // ]
// }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
 
  <React.StrictMode>
     {/* <RouterProvider router={routers}/> */}
     <App />
  </React.StrictMode>,
)
