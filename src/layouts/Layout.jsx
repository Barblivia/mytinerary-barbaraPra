import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

 const Layout = () => {
    return (
        <div className="bg-cover bg-center min-h-screen flex flex-col" style={{ backgroundImage: "url('/img/blueMap.jpg')" }}>
        <Header/>
          <Outlet/> 
        <Footer/>  
      </div>
    );
  };
  export default Layout;
