import React from "react"
import { css } from "@emotion/react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export default function Layout({ children }) {
    const data = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                title
              }
            }
          }
        `
    )
    return (
        <div style={{ margin: `3rem auto`, maxWidth: 850, padding: `0 1rem` }}>
            < div css={css`
        margin: 3rem auto;
        max-width: 650px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(0.5)};
      `}></div>
            <header style={{ marginBottom: `3.5rem` }}>
                <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
                    <h3 style={{ display: `inline` }}>{data.site.siteMetadata.title}</h3>
                </Link>
                <ul style={{ listStyle: `none`, float: `right` }}>
                    <ListLink to="/blogs/">Blogs</ListLink>
                    <ListLink to="/files/">Files</ListLink>
                    <ListLink to="/contact/">Contact</ListLink>
                </ul>
            </header>
            {children}
        </div>
    )
}
