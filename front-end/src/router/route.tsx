import { createBrowserRouter, Outlet } from "react-router-dom"
import Navbar1 from "@/navbar/Navbar1";
import Navbar from "@/navbar/Navbar";
import PageError from "@/PageError";
import Navbar2 from "@/navbar/navbar2";

const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Outlet />
      </>
    ),
    errorElement: (
      <PageError />
    ),
    children: [
      {
        path: '/1',
        element: (
          <>
            <Navbar1 />
            <Outlet />
          </>
        )
        
      },
      {
        path: '/2',
        element: (
          <>
            <Navbar2 />
            <Outlet />
          </>
        )
        
      }     
    ]
  },
])

export default Router;