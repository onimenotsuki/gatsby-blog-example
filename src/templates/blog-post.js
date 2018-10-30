import React, { Component } from 'react';
import { graphql } from 'gatsby';

/* Layout */
import Layout from '../components/layout';

class BlogPost extends Component {
  render() {
    const { title, content } = this.props.data.contentfulBlog;

    return (
      <Layout>
        <div>{title}</div>
        <div>{content.content}</div>
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
        content
      }
    }
  }
`;
