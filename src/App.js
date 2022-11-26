
import './App.scss';
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Login from "./components/Login/Login";
// import Register from './components/Register/Register';
import RegisterUpdate from './components/registerupdate/RegisterUpdate';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import NotFound from './components/NotFound/NotFound';
import Profile from "./components/Profile/Profile"
import jwtDecode from 'jwt-decode';
import { useEffect, useState } from 'react';
import ProtectedRoute from './components/ProtectedRout/ProtectedRoute';

import { Offline, Online } from "react-detect-offline";
import Movies from './components/Movies/Movies';

function App() {


  let routes = createBrowserRouter([
    {
      path: "/", element: <Layout />,errorElement: <NotFound/>,children: [
        // { index: true, element: <Register /> },
        { index: true, element: <ProtectedRoute ><Home/></ProtectedRoute>},
        { path: "movies", element:  <ProtectedRoute><Movies/> </ProtectedRoute> },
        { path: "login", element:  <Login /> },
        { path: "profile", element:  <ProtectedRoute><Profile  /> </ProtectedRoute> },
        {path: "register", element: <RegisterUpdate /> },


  ]}
  
])

  return (
    <>




    <Online>

    

    <RouterProvider router={routes}/>
   

    </Online>
    <Offline>
      <div className="container">

        <div className="row justify-content-center align-items-center vh-100">

             <h1 className='text-danger'>  You Are Offline Please Check Your Connection</h1>
        </div>
      </div>
      
     
    </Offline>

 

  
    </>
  );
}

export default App;
