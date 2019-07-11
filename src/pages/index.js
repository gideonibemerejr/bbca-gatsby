import React from "react"
import Link from "gatsby-link"

export default () => (
  <div style={{ color: "tomato" }}>
    <h1>Hello World</h1>
    <Link to="/about/">About</Link>
    &nbsp; &nbsp; &nbsp; &nbsp;
    <Link to="/page-2/">Page 2</Link>
    &nbsp; &nbsp; &nbsp; &nbsp;
    <Link to="/counter/">Counter</Link>
  </div>
)
