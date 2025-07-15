import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
       <div className="container">
          <h1 className="text-center mb-80">User Authentication</h1>
          <div className="row justify-content-center mt-5 ">
            <div className="col-md-6 w-500">
              <form action="#" className='p-4 border rounded shadow  p-4'>
                 <label htmlFor="email">Email:</label>
                 <input type="email" id="email" className="form-control" />
                 <label htmlFor="password">Password:</label>
                 <input type="password" id="password" className="form-control" />
                 <button type="submit" className="btn btn-primary">Login</button>
              </form>
                </div>
            </div>  
       </div>
    </>
  )
}

export default App
