import React from "react"
import * as styles from "./blogs.module.css"
import Container from "../components/container"

console.log(styles)

const Blog = props => (
    <div className={styles.blog}>
        <img src={props.img} className={styles.img} alt="" />
        <div className={styles.description}>
            <h2 className={styles.title}>{props.title}</h2>
            <p className={styles.excerpt}>{props.excerpt}</p>
        </div>
    </div>
)

export default function About() {
    return (
        <Container>
            <h1>Blog</h1>
            <p>Writing is nice</p>
            <Blog
                title="Unsettling"
                img="https://images.unsplash.com/photo-1617335875629-51c0f3a99607?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                excerpt="I'm Maria Randall. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            />
            <Blog
                title="Winning Day"
                img="https://images.unsplash.com/photo-1615630799462-2d8e05fe4509?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                excerpt="I'm Daniela Dewitt. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            />
        </Container>
    )
}
