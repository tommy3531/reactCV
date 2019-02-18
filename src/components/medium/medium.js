import React, {Component} from "react";
import { graphql, Link } from "gatsby";


class Medium extends Component {
  render () {
    return (
      <div>
        <hr />
          <h3>Certificates</h3>
        <ul>
          <li>
            <a href="https://courses.cognitiveclass.ai/certificates/ca26f467f07e49dc8608ba22d1593167">IBM Blockchain Foundation Developer</a>
          </li>
          <li>
            <a href="https://courses.cognitiveclass.ai/certificates/c35f5fc866344c09bf18f365ea36362f">Blockchain Essentials</a>
          </li>
        </ul>
      </div>
    )
  }
}


export default Medium

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        google
      }
    }
  }
`