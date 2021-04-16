import React from "react"
import { Link } from "gatsby"

const Layout = ({ children }) => {
  return (
    <div className="global-wrapper">
      <header className="global-header">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/faq">Frequently Asked Questions</Link>
        </nav>
      </header>

      <main>{children}</main>
    </div>
  )
}

export default Layout
