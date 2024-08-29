import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './pages/home/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TopBar from './components/topbar/TopBar';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Sidebar from './components/sidebar/Sidebar';
import SinglePost from './components/singlePost/SinglePost';
import SinglePost2 from './components/singlePost2/SinglePost2';
import Singlepost3 from './components/singlepost3/Singlepost3';
import Contact from './components/contact/Contact';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "home",
    element: 
    <>
    <TopBar/>
    <Home/>
    </>
  },
  {
    path: "write",
    element: <>
    <TopBar/>
    <Write/>
    </>
  },
  {
    path:"contact",
    element:<>
      <TopBar/>
      <Contact/>
    </>
,  },
  {
    path: "settings",
    element: <>
    <TopBar/>
    <Settings/>
    </>
  },
  {
    path: "logout",
    element: <Login/>
  },
  {
    path: "register",
    element: 
    <Register/>
  },
  {
    path: "about",
    element: 
    <>
    <TopBar/>
    <Sidebar/>
    </>
  },
  {
    path: "post1",
    element: 
    <>
    <TopBar/>
    <SinglePost/>
    </>
  },
  {
    path: "post2",
    element: 
    <>
    <TopBar/>
    <SinglePost2/>
    </>
  },
  {
    path: "post3",
    element: 
    <>
    <TopBar/>
    <Singlepost3/>
    </>
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);