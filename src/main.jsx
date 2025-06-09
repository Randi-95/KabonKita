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
import { MisiSubmitProvider } from './context/misiSubmitContext'
import LeaderboardPage from './pages/Leaderboard'
import LeaderboardPageGemini from './pages/leaderboardGemini'
import ProfilePage from './pages/Profile'
import Home from './pages/Home'


const router = createBrowserRouter ([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/home",
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
  },
  {
    path: "/peringkat",
    element: <LeaderboardPage/>
  },
  {
    path: "/peringkatGemini",
    element: <LeaderboardPageGemini/>
  },
  {
    path: "/profile",
    element: <ProfilePage/>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MisiSubmitProvider>
      <RouterProvider router={router} />
    </MisiSubmitProvider>
  </StrictMode>
)

