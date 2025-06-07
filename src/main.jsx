import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import './App.css'
import Dashboard from './pages/Dashboard'
import LoginPage from './pages/login'
import RegisterPage from './pages/register'
import MisiPage from './pages/Misi'
import PageSubmit from './pages/SubmitAksi'


const router = createBrowserRouter ([
  {
      path: "/",
      element: <Dashboard/>
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/register",
    element: <RegisterPage/>
  },
  {
    path: "/misi",
    element: <MisiPage/>
  },
  {
    path: "/SubmitAksi",
    element: <PageSubmit/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)

