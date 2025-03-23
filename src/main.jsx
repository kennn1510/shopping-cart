// Built-in modules
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// External libraries
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Local files
import Layout from "./Layout.jsx";
import HomePage from "./HomePage.jsx";
import Shop from "./Shop.jsx";
// CSS files
import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
