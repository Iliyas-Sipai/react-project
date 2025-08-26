import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Login from './components/Auth/Login'
import EmployeDashbord from './components/Dashbord/EmployeDashbord'
import AdminDashbord from './components/Dashbord/AdminDashbord'
function App() {
  return (
    <>
    {/* <Login/> */}
    {/* <EmployeDashbord/> */}
    <AdminDashbord/>
    </>
  )
}

export default App
