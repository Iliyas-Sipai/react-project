// import React, { createContext, useEffect, useState } from 'react'
// import { Children } from 'react'
// import { getLocalStorage } from '../ultilites/LocalStorage'

// export const AuthContext = createContext()
// const [userdata,setUser] = useState(null)

// useEffect(()=>{
// const {employees,admin} = getLocalStorage()
// setUser({employees,admin})
// },[])

// // console.log(data.employees);


//  function AuthProviderCompo({children}) {
//   return (
//     <div>
//         <AuthContext.Provider value={userdata}>
//           {children}
//          </AuthContext.Provider>
//     </div>
//   )
// }

// export default AuthProviderCompo

import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../ultilites/LocalStorage'

export const AuthContext = createContext()

function AuthProviderCompo({ children }) {

  const [userdata, setUser] = useState(null)

  useEffect(() => {
    const { employees, admin } = getLocalStorage()
    setUser({ employees, admin })
  }, [])

  return (
    <AuthContext.Provider value={userdata}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProviderCompo
