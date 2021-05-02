import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <Link to="/blogs/">Blog</Link>
      &nbsp;&nbsp;&nbsp;
      <Link to="/contact/">Contact</Link>
      <Header headerText="Home" />
      <p>Moon's blog</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
}
