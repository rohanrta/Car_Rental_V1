import React, { createContext, useEffect, useState } from 'react'
export const tokenAuthContext = createContext()

const AuthContextAPI = ({children}) => {
    const [isAuthorized,setIsAuthorized] = useState(false)
   
  return (
    <tokenAuthContext.Provider value={{isAuthorized,setIsAuthorized}}>
        {children}
        </tokenAuthContext.Provider>
  )
}

export default AuthContextAPI