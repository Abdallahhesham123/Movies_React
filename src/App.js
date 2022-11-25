
import './App.scss';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login/Login";
// import Register from './components/Register/Register';
import RegisterUpdate from './components/registerupdate/RegisterUpdate';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import NotFound from './components/NotFound/NotFound';
import Profile from "./components/Profile/Profile"
function App() {
  let routes = createBrowserRouter([
    {
      path: "/", element: <Layout/>,errorElement: <NotFound/>,children: [
        // { index: true, element: <Register /> },
        { index: true, element: <RegisterUpdate /> },
        { path: "login", element: <Login/> },
        { path: "profile", element: <Profile/> },
        { path: "home", element: <Home/> },


  ]}
  
])

  return (
    <>
  <RouterProvider router={routes}/>
    </>
  );
}

export default App;
