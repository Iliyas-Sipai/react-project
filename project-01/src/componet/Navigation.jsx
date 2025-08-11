import React from 'react'
import logo from "../assets/brand_logo.png";


const Navigation = () => {
  return (
    <>
      <div>
          <nav className='container'>
              <div className="logo"></div>
                <img src={logo} alt="" />
                <ul>
                  <li>Menu</li>
                  <li>Location</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
                <button>Login</button>
          </nav>
       </div>

    </>
  )
}

export default Navigation
