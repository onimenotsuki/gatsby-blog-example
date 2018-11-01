import React, { Component } from 'react';
import { graphql } from 'gatsby';

/* Layout */
import Layout from '../components/layout';

class BlogPost extends Component {
  render() {
    const {
      title,
      content,
    } = this.props.data.contentfulBlog;

    return (
      <Layout>
        <h1>{title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: content.childMarkdownRemark.html
          }}
        />
      </Layout>
    );
  }
}

export default BlogPost;

export const pageQuery = graphql`
  query blogPostQuery($slug: String!) {
    contentfulBlog(slug: { eq: $slug}) {
      title
      slug
      content {
        id
        childMarkdownRemark {
          excerpt
          html
        }
      }
    }
  }
`;
