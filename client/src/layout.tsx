import * as React from "react"
import { Link } from "gatsby"
import NavLink from "./features/navigation/NavLink"

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (<div
    className='container mx-auto'>
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="text-white text-lg" >K-Chat</div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <header>
    </header>
    <main>
      {children}
    </main>
  </div>)
}

export default Layout
