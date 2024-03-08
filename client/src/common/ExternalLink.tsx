import * as React from 'react'

const ExternalLink: React.FC<React.PropsWithChildren<{
  href: string
}>> = (props) => {
  return (

    <a
      target='_blank'
      rel='noreferrer noopener'
      href={props.href}
      className='text-blue-500 hover:underline'
    >
      {props.children}
    </a>
  )
}

export default ExternalLink
