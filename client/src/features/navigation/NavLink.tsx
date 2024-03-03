import * as React from 'react'
import { Link } from 'gatsby'

const NavLink: React.FC<React.PropsWithChildren<{
  to: string
}>> = (props) => <Link to={props.to} activeClassName="bg-gray-900 text-white" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">{props.children}</Link>

export default NavLink
