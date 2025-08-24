import React, { useState } from "react";
import { useSelector } from "react-redux";

const Login = () => {
   const [email,setEmail] = useState('');
   const [password,setPassword] = useState('')
      const saveData = (e) =>{
        e.preventDefault()
        console.log("saveDtaa",email);
        console.log("password",password);
        
        setEmail("")
        setPassword("")
      }
  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="border-2 border-emerald-600 rounded-xl p-20">
          <form action="#" className="flex flex-col item-center justify-center" onSubmit={(e)=>{saveData(e)}}>
            <input
              className=" text-white border-2 outline-none bg-transparent border-emerald-600 rounded-full py-3 px-5 placeholder:text-gray-400"
              type="email"
              placeholder="Enter your email"
              onChange={(e)=>{setEmail(e.target.value)}}
              value={email}
              required
            />
            <input
              className="text-white border-2 mt-5 outline-none bg-transparent border-emerald-600 rounded-full py-3 px-5 placeholder:text-gray-400"
              type="password"
              placeholder="Enter your passwrod"
              onChange={(e)=>{setPassword(e.target.value)}}
              value={password}
              required
            />
            <button className="cursor-pointer mt-5 text-white border-none outline-none bg-emerald-600 rounded-full py-5 px-5 placeholder:text-white">
              Log in
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
