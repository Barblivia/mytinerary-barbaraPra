import { useState } from 'react';
import './App.css';
import router from './routers/router';
import { RouterProvider } from 'react-router-dom';
/* import Layout from './layouts/Layout';
import Home from './pages/index/Home'; */

function App() {
   return (
          <RouterProvider router={router}/>
           )
};
export default App;