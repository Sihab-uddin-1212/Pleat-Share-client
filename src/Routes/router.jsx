 import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Layout/Root';
import Home from '../pages/Home';
import Register from '../verify/Register';
import Login from '../verify/Login';
import AllFood from '../pages/AllFood';
 
 const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
        {
            index:true,
            element:<Home></Home>
        },
        {
            path:"/register",
            element:<Register></Register>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/all-foods",
            element:<AllFood></AllFood>
            //from here no privet routes
        }
    ]
  },
]);
 
 export default router;