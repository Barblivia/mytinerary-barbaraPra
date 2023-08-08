import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/index/Home'
import Cities from '../pages/index/Cities'
import Layout from '../layouts/Layout'

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
        path:'*', 
        element: <h1 className="">Error page</h1>
         },
    ],
},
//out of layout {},
]);
export default router;
