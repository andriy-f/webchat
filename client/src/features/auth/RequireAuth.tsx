import * as React from 'react'
import { Link } from 'gatsby'

import { AuthenticationContext } from './AuthenticationContext'

const RequireAuth: React.FC<React.PropsWithChildren> = ({ children }) => {
  const authContext = React.useContext(AuthenticationContext)
  return authContext.userName
    ? <>{children}</>
    : (<div className='my-2'>
      Please <Link className='rounded-md bg-indigo-600 px-3 py-1.5 text-white shadow-sm hover:bg-indigo-500' to='/login' >Login</Link>
    </div>)
}

export default RequireAuth
