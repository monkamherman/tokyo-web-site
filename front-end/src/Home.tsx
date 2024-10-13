import Router from "./router/route"
import { RouterProvider } from "react-router-dom"

export default function Home() {
  return (
    <div >
      <RouterProvider router={Router} />

    </div>
  )
}
