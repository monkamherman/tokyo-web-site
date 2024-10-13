
import Router from "./router/route"
import { RouterProvider } from "react-router-dom"
import { ThemeProvider } from "@/components/ui/theme-provider"


export default function Home() {
  return (
    <div >
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={Router} />
       
      </ThemeProvider>
    </div>
  )
}
