import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout'
import Home from '../pages/index/Home'
import Cities from '../pages/index/Cities'
import CityDetails from "../pages/index/CityDetails";

const router = createBrowserRouter([
{
    path: '/',
    element: <Layout/>,
    children: 
    [
         { 
        path:'/', 
        element: <Home />
         },
         { 
        path:'/cities', 
        element: <Cities />
         },
         { 
            path:'/cities/:id', 
            element: <CityDetails />
             },
         { 
        path:'*', 
        element: <h1 className="text-6xl font-bold">Error page: Not Found</h1>
         },
    ],
},
//out of layout {},
]);
export default router;
