import { createContext } from 'react'

export interface AuthenticationContextType {
  isLoggedIn: boolean
  userName: string
  login: (userName: string) => void
  logout: () => void
}

const initialContext: AuthenticationContextType = {
  userName: '',
  isLoggedIn: false,
  login: function (userName: string) {
    this.isLoggedIn = true
    this.userName = userName
  },
  logout: function () {
    this.isLoggedIn = false
    this.userName = ''
  }
}

export const AuthenticationContext = createContext(initialContext)
