import { useState } from 'react'

export const useAuth = () => {
  const [auth, setAuth] = useState({
    is: false,
    user: []
  })

  return {
    auth,
    setAuth
  }
}
