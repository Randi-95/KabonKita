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
import AdminPage from './pages/Admin'


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
  },
  {
    path: "/admin",
    element: <AdminPage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)

