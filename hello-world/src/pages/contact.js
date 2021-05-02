import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Contact() {
    return (
        <div style={{ color: `teal` }}>
            <Link to="/">Home</Link>
            <Header headerText="Contact" />
            <p><a href="https://www.linkedin.com/in/moonyuema/">LinkedIn</a></p>
            <p><a href="https://better-question.medium.com/">Medium</a></p>
            <p><a href="https://github.com/moon-home">Github</a></p>
            <p><a href="https://www.youtube.com/channel/UCy1gZGKcBi1FN1SOV3_9fWw">YouTube</a></p>
        </div>
    )
}
