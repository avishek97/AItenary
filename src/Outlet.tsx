import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Home/Home'
import Explore from './Explore/Explore'
import Account from './Account/Account'
import About from './About/About'
import Contact from './Contact/Contact'

const Outlet = () => {
    const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>,
      children: [
        {
          path: 'explore',
          element: <Explore/>
        },
        {
          path: 'account',
          element: <Account/>
        },
        {
          path: 'about',
          element: <About/>
        },
        {
          path: 'contact',
          element: <Contact/>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default Outlet