// import React from 'react'
// import PropTypes from 'prop-types'
// import Helmet from 'react-helmet'
// import { StaticQuery, graphql } from 'gatsby'

// // function Certs({ description, lang, meta, keywords, title }) {
// //   return (
// //     <StaticQuery
// //       query={detailsQuery}
// //       render={data => {
// //         return (
// //             <h1></h1>
// //         )
// //       }}
// //     />
// //   )
// // }

// export default Certs

// const detailsQuery = graphql`
//     query {
//     allMediumPost(sort: { fields: [createdAt], order: DESC }) {
//       edges {
//         node {
//           id
//           title
//           virtuals {
//             subtitle
//             previewImage {
//               imageId
//             }
//           }
//           author {
//             name
//           }
//         }
//       }
//     }
//   }
// `
