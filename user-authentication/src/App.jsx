import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginCompo from './pages/LoginCompo'
import ProfileCompo from './pages/ProfileCompo'
import { BrowserRouter,Router,Routes,Route } from 'react-router-dom'
import NavbarCompo from './NavbarCompo'

function App() {
  return (
    <>
       <NavbarCompo /> 
      <Routes>
        <Route path='/' element={<LoginCompo/>}/>
        <Route path='/login' element={<LoginCompo/>}/>
        <Route path='/profile' element={<ProfileCompo/>}/>
      </Routes>
    </>
  )
}

export default App
