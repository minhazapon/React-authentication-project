import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home';
import Root from './Root';
import Login from './Login';
import SignUp from './SignUp';
import Learn from './Learn';
import Dev from './Dev';
import AuthContext from './AuthContext';
import PrivateRoute from './PrivateRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element:  <Root></Root>,
    children: [
      {
        path: "/",
        element:  <Home></Home>,
      },
      {
        path: "/login",
        element:  <Login></Login>,
      },
      {
        path: "/up",
        element:  <SignUp></SignUp>,
      },
      {
        path: "/learn",
        element:   <PrivateRoute><Learn></Learn></PrivateRoute> ,
      },
      {
        path: "/dev",
        element:   <PrivateRoute><Dev></Dev></PrivateRoute>   ,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthContext>
    <RouterProvider router={router} />
  
    </AuthContext>
    
  </React.StrictMode>,
)
