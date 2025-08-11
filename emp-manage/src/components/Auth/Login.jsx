import React from "react";

const Login = () => {
      const saveData = () =>{
        console.log("saveDtaa");
        
      }
  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="border-2 border-emerald-600 rounded-xl p-20">
          <form action="#" className="flex flex-col item-center justify-center" onSubmit={saveData}>
            <input
              className=" text-white border-2 outline-none bg-transparent border-emerald-600 rounded-full py-3 px-5 placeholder:text-gray-400"
              type="email"
              placeholder="Enter your email"
              required
            />
            enter valid password
            <input
              className="text-white border-2 mt-5 outline-none bg-transparent border-emerald-600 rounded-full py-3 px-5 placeholder:text-gray-400"
              type="password"
              placeholder="Enter your passwrod"
              required
            />
            <button className=" mt-5 text-white border-none outline-none bg-emerald-600 rounded-full py-5 px-5 placeholder:text-white">
              Log in
            </button>
            saveData <data value=""></data>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
