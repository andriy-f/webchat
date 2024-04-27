import * as React from 'react'
import { navigate } from 'gatsby'

import { AuthenticationContext } from './AuthenticationContext'

const Logout: React.FC = () => {
  const authContext = React.useContext(AuthenticationContext)

  React.useEffect(() => {
    setTimeout(() => {
      authContext.logout()
      void navigate('/')
    })
  }, [authContext])

  return (
    <>
      You are being logged out...
    </>
  )
}

export default Logout
