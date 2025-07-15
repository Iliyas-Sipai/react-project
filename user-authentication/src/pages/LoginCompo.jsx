import React from "react";
import { useState } from "react";
import axios from "axios";
const LoginCompo = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const handleChange = () =>{
       const payload = {
        email: email,
        password:password
       }
       console.log(password,email);
       axios.post(" https://api.escuelajs.co/api/v1/auth/login",payload)
       .then((res)=>{
        localStorage.setItem("token", JSON.stringify( res.data.access_token))
        alert("login is compplted")
         console.log("login is compplted",res);
        })
        .catch((err)=>{
          console.log("login is fail");
        })
      }
  return (
    <>
      <div className="container">
        <h1 className="text-center mb-80">User Authentication</h1>
        <div className="row justify-content-center mt-5 ">
          <div className="col-md-6 w-500">
            <form action="#" className="p-4 border rounded shadow  p-4">
              <label htmlFor="email">Email:</label>
              <input onChange={(e)=>setEmail(e.target.value)} type="email" id="email" className="form-control" />
              <label htmlFor="password">Password:</label>
              <input onChange={(e)=>setPassword(e.target.value)} type="password" id="password" className="form-control" />
              <button onClick={handleChange} type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginCompo;
