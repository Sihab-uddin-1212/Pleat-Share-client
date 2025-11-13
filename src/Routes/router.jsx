 import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Layout/Root';
import Home from '../pages/Home';
import Register from '../verify/Register';
import Login from '../verify/Login';
import AllFood from '../pages/AllFood';
import FoodDetails from '../pages/FoodDetails';
import AddFood from '../pages/AddFood';
import MyFoods from '../pages/MyFoods';
import PrivateRoute from './PrivetRoute';
import MyRequest from '../pages/MyRequest';
import Error from '../pages/Error';
 
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
        },
        {
            path:`/food-details/:id`,
            element:<PrivateRoute><FoodDetails></FoodDetails></PrivateRoute>
        },
        {
            path:'/addfood',
            element:<PrivateRoute><AddFood></AddFood></PrivateRoute>
        },
        {
            path:'/my-food',
            element:<PrivateRoute><MyFoods></MyFoods></PrivateRoute>
        },
        {
            path:'/my-request',
            element:<PrivateRoute><MyRequest></MyRequest></PrivateRoute>
        },
        {
            path:'*',
            element:<Error></Error>
        }
    ]
  },
]);
 
 export default router;