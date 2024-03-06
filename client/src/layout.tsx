import * as React from 'react'

import NavLink from './features/navigation/NavLink'
import { AuthenticationContext } from './features/auth/AuthenticationContext'

const Layout: React.FC<React.PropsWithChildren<{ pageTitle: string }>> = ({ pageTitle, children }) => {
  const authContext = React.useContext(AuthenticationContext)

  return (
    <AuthenticationContext.Provider value={authContext}>
      <div
        className='container mx-auto'>
        <nav className='bg-gray-800'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='flex h-16 items-center justify-between'>
              <div className='flex items-center'>
                <div className='flex-shrink-0'>
                  <div className='text-white text-lg' >K-Chat</div>
                </div>
                <div className='block'>
                  <div className='ml-10 flex items-baseline space-x-4'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/login'>Login</NavLink>
                  </div>
                </div>
              </div>
              <div className='text-white'>
                {authContext.userName
                  ? `Hello, ${authContext.userName}`
                  : ''
                }
              </div>
            </div>
          </div>
        </nav>
        <header>
          <h1 className="text-3xl font-bold underline">
            {pageTitle}
          </h1>
        </header>
        <main>
          {children}
        </main>
      </div>
    </AuthenticationContext.Provider>
  )
}

export default Layout
