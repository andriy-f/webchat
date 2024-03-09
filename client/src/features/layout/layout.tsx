import * as React from 'react'

import { AuthenticationContext } from '../auth/AuthenticationContext'
import RegularMainMenu from './RegularMainMenu'
import MobileMainMenu from './MobileMainMenu'

const Layout: React.FC<React.PropsWithChildren<{ pageTitle: string }>> = ({ pageTitle, children }) => {
  const authContext = React.useContext(AuthenticationContext)

  return (
    <AuthenticationContext.Provider value={authContext}>
      <div
        className='flex flex-col h-full max-h-full'>
        <nav className='bg-slate-600'>
          <div className='flex items-center justify-between mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16'>
            <MobileMainMenu />
            <div className='hidden sm:flex flex-1 items-center justify-between'>
              <RegularMainMenu />
              <div className='text-white'>
                {authContext.userName
                  ? `Hello, ${authContext.userName}`
                  : ''
                }
              </div>
            </div>
          </div>
        </nav>
        <main className='grow flex flex-col max-h-[calc(100%-5rem)] px-1 md:w-full md:max-w-3xl md:mx-auto p-2'>
          <h1 className="text-3xl font-bold underline text-center mb-1">
            {pageTitle}
          </h1>
          {children}
        </main>
      </div>
    </AuthenticationContext.Provider>
  )
}

export default Layout
