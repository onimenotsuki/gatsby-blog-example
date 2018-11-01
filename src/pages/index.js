import React from 'react'
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout'

const BlogPost = (({ node })  => {
  return (
    <li>
      <Link to={node.slug}>
        {node.title}
      </Link>
      <div>
        {node.content.childMarkdownRemark.excerpt}
      </div>
      {node.featureImage && (
         <img src={`${node.featureImage.resize.src}`} />
      )}
    </li>
  );
});

const IndexPage = ({ data }) => (
  <Layout>
    <ul>
      {data.allContentfulBlog.edges.map((edge) => {
         return <BlogPost node={edge.node} />
      })}
    </ul>
  </Layout>
)

export const query = graphql`
  query pageQuery {
    allContentfulBlog (limit: 3) {
      edges {
        node {
          title
          id
          slug
          content {
            childMarkdownRemark {
              excerpt
            }
          }
          featureImage {
            title
            resize (width: 200) {
              src
              width
              height
            }
          }
        }
      }
    }
  }
`;

export default IndexPage
