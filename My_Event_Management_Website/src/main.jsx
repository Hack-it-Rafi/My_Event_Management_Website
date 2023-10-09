import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import AuthProvider from './AuthProvider';
import Services from './Services';
import ServiceDetails from './ServiceDetails';
import PrivateRoute from './PrivateRoute';
import RequestForProposal from './RequestForProposal';
import QandA from './QandA';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=>fetch("/services.json")
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: ()=>fetch("/services.json")
      },
      {
        path: "/request",
        element: <PrivateRoute><RequestForProposal></RequestForProposal></PrivateRoute>
      },
      {
        path: "/Q&A",
        element: <PrivateRoute><QandA></QandA></PrivateRoute>
      },
      {
        path: "/:id",
        loader: ()=>fetch("/services.json"),
        element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
        
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
