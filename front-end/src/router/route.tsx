import { createBrowserRouter, Outlet } from "react-router-dom"
import Navbar1 from "@/navbar/Navbar1";
import Navbar from "@/navbar/Navbar";
import PageError from "@/PageError";

const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Outlet />
      </>
    ),
    // Page erreur
    errorElement: (
      <PageError />
    ),
    children: [
      // For the 3 principales navigate links: Home, Blog, and Chat
      {
        path: '/navbar',
        element: (
          <>
            <Navbar />
            <Outlet />
          </>
        )
        
      },
      {
        path: '/navbar1',
        element: (
          <>
            <Navbar1 />
            <Outlet />
          </>
        )
        
      },

      

      
     
    ]
  },
])

export default Router;