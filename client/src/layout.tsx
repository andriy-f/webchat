import * as React from "react"
import { Link } from "gatsby"

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (<>
    <header>
      <div className="text-xl font-medium text-black">
        K-Chat
      </div>
    </header>
    <nav>
      Menu:<ul className="flex p-6">
        <li>
          <Link className="p-6" to="/">Home</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
      </ul>
    </nav>
    <main>
      {children}
    </main>
  </>)
}

export default Layout
