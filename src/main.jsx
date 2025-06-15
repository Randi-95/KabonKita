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
import ProfilePage from './pages/Profile'
import Home from './pages/Home'
import { AuthProvider } from './context/authContext'
import RiwayatPage from './pages/riwayat'
import LencanaPage from './pages/Badges'
import PageInfoAkun from './pages/InfoAkun'
import PageTentangKami from './pages/tentangkami'

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
    path: "/profile",
    element: <ProfilePage/>
  },
  {
    path: "/riwayat",
    element: <RiwayatPage/>
  },
  {
    path: "/lencana",
    element: <LencanaPage/>
  },
   {
    path: "/infoakun",
    element: <PageInfoAkun/>
  },
   {
    path: "/tentangkami",
    element: <PageTentangKami/>
  },
])

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <AuthProvider>
      <MisiSubmitProvider>
        <RouterProvider router={router} />
      </MisiSubmitProvider>
    </AuthProvider>
  </StrictMode>
);
