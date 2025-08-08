import React from 'react'

const Login = () => {
  return (
    <>
       <div className='flex h-screen w-screen items-center justify-center'>
         <div className='border-2 border-red-600'>
            <form action="#" className='flex flex-col item-center justify-center'>
                 <input className='text-black border-2 border-emeral-600 rounded-full py-4 pxl-5' type="email" placeholder='Enter your email'/>
                 <input type="password" placeholder='Enter your passwrod' />
                 <button>Log in</button>
            </form>
         </div>
        </div>    
    </>
  )
}

export default Login
