import { useState, useCallback, useEffect } from 'react'
import { AuthContext } from './authContext'
import {
  getSession,
  logoutUser,
  registerUser,
  loginUser,
} from '../lib/authEngine'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => getSession())

  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === 'forge_auth_session') {
        setUser(getSession())
      }
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  const login = useCallback(async (credentials) => {
    const result = await loginUser(credentials)
    if (result.success) setUser(result.user)
    return result
  }, [])

  const register = useCallback(async (data) => {
    const result = await registerUser(data)
    if (result.success) setUser(result.user)
    return result
  }, [])

  const logout = useCallback(() => {
    logoutUser()
    setUser(null)
  }, [])

  return (
    <AuthContext.Provider value={{ user, isLoggedIn: !!user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
