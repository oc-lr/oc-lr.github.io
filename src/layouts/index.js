import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import "tachyons"

import "./fonts.css"

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: "description", content: "OrigoChain: Land Records" },
        { name: "keywords", content: "blockchain, OrigoChain" },
      ]}
    />
    <div className="">{children()}</div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
