import React from 'react'
import NavLink from '../navigation/NavLink'
import { mainMenuItems } from '../navigation/mainMenuItems'
import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline'

const RegularMainMenu = () => {
  return (
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
  )
}

export default RegularMainMenu
