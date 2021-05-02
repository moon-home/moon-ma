import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Contact({ data }) {
    return (
        <Layout>
            <div style={{ color: `teal` }}>
                <h1>About {data.site.siteMetadata.title}</h1>
                <p><a href="https://www.linkedin.com/in/moonyuema/">LinkedIn</a></p>
                <p><a href="https://better-question.medium.com/">Medium</a></p>
                <p><a href="https://github.com/moon-home">Github</a></p>
                <p><a href="https://www.youtube.com/channel/UCy1gZGKcBi1FN1SOV3_9fWw">YouTube</a></p>
            </div>
        </Layout>
    )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
