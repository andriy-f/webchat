import { createContext } from 'react'

export interface AuthenticationContextType {
  userName: string
  login: (userName: string) => void
}

const initialContext: AuthenticationContextType = {
  userName: '',
  login: function (userName: string) {
    this.userName = userName
  },
}

export const AuthenticationContext = createContext(initialContext)
