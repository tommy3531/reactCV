import React, {Component} from "react";
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { graphql, Link } from "gatsby";


class Medium extends Component {
  render () {
    return (
      <div>
        <OutboundLink
          href="https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/"
        >
          Visit the Google Analytics plugin page!
        </OutboundLink>
      </div>
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
          <li>
          </li>
        </ul>
      </div>
    )
  }
}


export default Medium

