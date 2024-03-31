import React from 'react'
import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline'

import { AuthenticationContext } from '../auth/AuthenticationContext'
import NavLink from '../navigation/NavLink'
import { mainMenuItems } from '../navigation/mainMenuItems'
import ProfileAvatar from './ProfileAvatar'

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
              <NavLink key={item.label} to={item.to}>{item.label}</NavLink>
            ))}
          </div>
        </div>
      </div>

      {authContext.isLoggedIn
        ? <ProfileAvatar />
        : <NavLink to='/login'>Login</NavLink>
      }
    </div>
  )
}

export default RegularMainMenu
