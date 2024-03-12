import React from 'react'
import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline'

import { AuthenticationContext } from '../auth/AuthenticationContext'
import NavLink from '../navigation/NavLink'
import { mainMenuItems } from '../navigation/mainMenuItems'

const RegularMainMenu = () => {

  const authContext = React.useContext(AuthenticationContext)
  return (
    <div className='hidden sm:flex flex-1 items-center justify-between'>
      <div className='flex items-center'>
        <div className='flex-shrink-0'>
          <ChatBubbleBottomCenterTextIcon className='h-8 w-8 text-white' />
        </div>
        <div>
          <div className='ml-10 flex items-baseline space-x-4'>
            {mainMenuItems.map((item) => (
              <NavLink to={item.to}>{item.label}</NavLink>
            ))}
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
  )
}

export default RegularMainMenu
