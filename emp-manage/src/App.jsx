import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Login from './components/Auth/Login'
import EmployeDashbord from './components/Dashbord/EmployeDashbord'
import AdminDashbord from './components/Dashbord/AdminDashbord'
import Header from './other/Header'
import { useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from './ultilites/LocalStorage'
function App() {
  const [user ,setUser]= useState(null)
  const handleLogin = (email,password) =>{

    if(email === 'admin@gmail.com' && password == '123'){
      setUser('admin')
      console.log(user);

    } else if(email == 'user@gmail.com' && password == '123'){
      setUser('employee')
      console.log(user);
    }
    else{
      alert("invialid pass")
    }
    //  console.log(email,password);
  }
  // handleLogin('admin@gmail.com',123)
  return (
    <>
    {/* {!user?<Login  handleLogin={handleLogin}/>:''} */}
    {!user && <Login handleLogin={handleLogin} />}
    {!user && <Login handleLogin={handleLogin} />}
{user === "admin" && <AdminDashbord />}
{user === "employee" && <EmployeDashbord />}

    {/* <EmployeDashbord/> */}
    {/* <AdminDashbord/>   */}
    </>
  )
}

export default App
