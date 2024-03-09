import React from 'react'
import { Link } from 'gatsby'
import NavLink from '../navigation/NavLink'

const RegularMainMenu = () => {
  return (
    <div className='flex items-center'>
      <div className='flex-shrink-0'>
        <div className='text-white text-lg'>K-Chat</div>
      </div>
      <div className='block'>
        <div className='ml-10 flex items-baseline space-x-4'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
        </div>
      </div>
    </div>
  )
}

export default RegularMainMenu
