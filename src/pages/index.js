import React from 'react'
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout'

const BlogPost = (({ node })  => {
  return (
    <li>
      <Link to={node.slug}>
        {node.title}
      </Link>
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
          id
          slug
          title
        }
      }
    }
  }
`;

export default IndexPage
