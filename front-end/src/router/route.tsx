import { createBrowserRouter, Outlet } from "react-router-dom"
import PageError from "@/PageError";
import Home from "@/page/Home";
import HomeMain from "@/page/component/home main/HomeMain";
import Home_2 from "@/page/component/real estate/Home_2";

const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Outlet />
        <Home/>
      </>
    ),
    errorElement: (
      <PageError />
    ),
    children: [
      {
        path: '/home main',
        element: (
          <>
            <HomeMain />
            <Outlet />
          </>
        )
        
      },
      {
        path: '/home 2',
        element: (
          <>
            <Home_2 />
            <Outlet />
          </>
        )
        
      }     
    ]
  },
])

export default Router;