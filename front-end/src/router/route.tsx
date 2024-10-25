import { createBrowserRouter, Outlet } from "react-router-dom"
import PageError from "@/PageError";
import Navbar2 from "@/page/navbar/navbar2";
import Home from "@/page/Home";

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
        path: '/home',
        element: (
          <>
            <Home />
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