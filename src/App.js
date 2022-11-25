
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

function App() {
const [UserData, setUserData] = useState(null)
let SaveUserData=()=>{

  let encodedToken = localStorage.getItem("token")

  let decodedToken = jwtDecode(encodedToken)

  setUserData(decodedToken)


}

let LogOut= ()=>{

  localStorage.removeItem("token")
  setUserData(null)
  return <Navigate to="/login"/>
}

useEffect(() => {
  if(localStorage.getItem("token")){
    SaveUserData();

  }
 
}, [])


  let routes = createBrowserRouter([
    {
      path: "/", element: <Layout UserData={UserData} LogOut={LogOut}/>,errorElement: <NotFound/>,children: [
        // { index: true, element: <Register /> },
        { index: true, element: <ProtectedRoute UserData={UserData}><Home/></ProtectedRoute>},
        { path: "login", element:  <Login SaveUserData ={SaveUserData}/> },
        { path: "profile", element:  <ProtectedRoute UserData={UserData}><Profile UserData={UserData} /> </ProtectedRoute> },
        {path: "register", element: <RegisterUpdate /> },


  ]}
  
])

  return (
    <>
  <RouterProvider router={routes}/>
    </>
  );
}

export default App;
