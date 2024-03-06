import * as React from 'react'
import { Link } from 'gatsby'

import { AuthenticationContext } from './AuthenticationContext'

const RequireAuth: React.FC<React.PropsWithChildren> = ({ children }) => {
  const authContext = React.useContext(AuthenticationContext)
  return authContext.userName
    ? <>{children}</>
    : <div>Please <Link to='/login' >Login</Link></div>
}

export default RequireAuth
