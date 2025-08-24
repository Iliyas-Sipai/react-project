import React from 'react'
import hero from "../assets/hero-image.png";
import amazon from "../assets/amazon.png"
import flipcart from "../assets/flipkart.png"




const HeroCompo = () => {
  return (
    <main className='hero'> 
       <div className='hero-content'>
         <h1>YOUR FEET DESERVE THE BEST</h1>
         <p>These ultra-smooth, above-the-knee shorts are crafted from waterproof materials that won't weigh you down.</p>
       <div className='hero-btn'>
            <button>Shop Now</button>
            <button>Categry</button>
       </div>
             <div className="shopping">
              <p>Alos Available On</p>
              <div className="brand-icons">
                <img src={amazon} alt="" />
                <img src={flipcart} alt="" />

              </div>
             </div>
       </div>
       <div className="hero-image">
        <img src={hero} alt="" />

       </div>
    </main>
  )
}
export default HeroCompo
