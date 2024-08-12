import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Landing from './Landing.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Pricing from './Pricing.jsx'
import Login from './Login.jsx'
import App1 from  './App1.jsx'
import App2 from  './App2.jsx'
import App3 from  './App3.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/pricing",
    element: <Pricing />,
    children: [
        {
          path: "/pricing/app1",
          element: <App1 />
        },
        {
          path: "/pricing/app2",
          element: <App2 />
        },
        {
          path: "/pricing/app3",
          element: <App3 />
        },
    ],
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
