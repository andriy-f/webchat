import React from 'react'
import { Link } from 'gatsby'
import { Menu } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import { mainMenuItems } from '../navigation/mainMenuItems'

const MobileMainMenu = () => {
  return (
    <div className='block sm:hidden'>
      <Menu as='div' className='relative inline-block text-left'>
        {(menu) => (<>
          <Menu.Button className='inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75'>
            {menu.open
              ? <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              : <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            }
          </Menu.Button>
          <Menu.Items className='absolute left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none'>
            {mainMenuItems.map((item) => (
              <Menu.Item>
                {({ active }) => (
                  <Link
                    className={`${active ?
                      'bg-slate-500 text-white'
                      : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    to={item.to}
                  >
                    {item.label}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </>)}
      </Menu>
    </div>
  )
}

export default MobileMainMenu
