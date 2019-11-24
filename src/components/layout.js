import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header';
import Cover from './cover';
import AboutMe from './about-me';
import Experience from './experience';
import Projects from './projects';
import ContactMe from './contact-me';
import Footer from './footer';
import './layout.css'

// gatsbyLogo: file(relativePath: { eq: "gatsby-logo.svg" }) {
//   childImageSharp {
//     fluid(maxWidth: 200) {
//       ...GatsbyImageSharpFluid
//     }
//   }
// }

const Layout = () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        coverImg: file(relativePath: { eq: "background.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 5000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        textFill: file(relativePath: { eq: "animated-text-fill.png" }) {
          childImageSharp {
            fluid(maxWidth: 5000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>

        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}

        <Cover coverImg={data.coverImg.childImageSharp.fluid } />

        <AboutMe />

        <Experience />

        <Projects />

        <ContactMe />

        <Footer />

        {/* <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div> */}
      </>
    )}
  />
)

Layout.propTypes = {
  // children: PropTypes.node.isRequired,
}

export default Layout
