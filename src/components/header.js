import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.css'

const Header = () => {
  return (
    <header>
      <div>
        <Link to="/"><img src="/images/logo.png" alt="Hoist Logo" /></Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/" activeClassName="active">Home</Link></li>
          <li><Link to="/about" activeClassName="active">About</Link></li>
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
