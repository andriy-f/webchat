import * as React from "react"
import { Link } from "gatsby"

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (<>
    <header>K-Chat</header>
    <nav>
      Menu:
      <ul>
        <li>
          <Link to="/">Home</Link>
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
