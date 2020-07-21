/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import Header from "./header"

const Layout = ({ children, fourohfour = false }) => {
  return (
    <div id="outerWrapper" className={fourohfour ? "fourohfour" : ""}>
      <div id="wrapper">
        <Header />

        {children}

        <footer id="footer">
          <div id="copyrights">
            <div className="container clearfix">
              <div className="col_half">
                Copyrights © 2020 All Rights Reserved by Lunar Productions Pty
                Ltd.
                <br />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
