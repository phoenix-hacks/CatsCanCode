import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useNavigate,createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import LandingPage from "./landingPagSections/LandingPage.jsx" //ignore this error stupid ahh shit
import App from './App.jsx'


const router=createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
