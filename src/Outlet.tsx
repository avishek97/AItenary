import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Components/Home/Home'
import Explore from './Components/Explore/Explore'
import Account from './Components/Account/Account'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'

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