import React from 'react'
import NavLink from '../navigation/NavLink'
import { mainMenuItems } from '../navigation/mainMenuItems'

const RegularMainMenu = () => {
  return (
    <div className='flex items-center'>
      <div className='flex-shrink-0'>
        <div className='text-white text-lg'>K-Chat</div>
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
