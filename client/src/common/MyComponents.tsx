import * as React from 'react'

export const MyH2: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <h2 className='text-2xl font-bold underline mt-1'>
      {children}
    </h2>
  )
}
