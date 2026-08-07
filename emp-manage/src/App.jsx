import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";
import Login from "./components/Auth/Login";
import EmployeDashbord from "./components/Dashbord/EmployeDashbord";
import AdminDashbord from "./components/Dashbord/AdminDashbord";
import Header from "./other/Header";
import { useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "./ultilites/LocalStorage";
import { AuthContext } from "./context/AuthProviderCompo";
function App() {
  const [user, setUser] = useState(null);
  const data = useContext(AuthContext);
  console.log(data);

  useEffect(()=>{
    if(data){
      const loggedInUser = localStorage.getItem("user are login")
       if(loggedInUser){
        setUser(loggedInUser)
       }
    }
  },[data])

  const handleLogin = (email, password) => {
    if (email === "admin@gmail.com" && password == "123") {
      setUser("admin");
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
      // console.log(user);
    } else if (email == "user@gmail.com" && password == "123") {
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
    } else {
      alert("invialid pass");
    }
  };

  return (
    <>
      {!user?<Login  handleLogin={handleLogin}/>:''}
      {/* {!user && <Login handleLogin={handleLogin} />} */}
      {/* {!user && <Login handleLogin={handleLogin} />} */}
      {user === "admin" ? <AdminDashbord /> : <EmployeDashbord />}
      {user === "employee" && <EmployeDashbord />}
      {/* <EmployeDashbord/> */}
      {/* <AdminDashbord/>   */}
    </>
  );
}

export default App;
