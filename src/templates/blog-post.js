import React, { Component } from 'react';
import { graphql } from 'gatsby';

class BlogPost extends Component {
  render() {
    const { title } = this.props.data.contentfulBlog;

    return (
      <div>
        {title}
      </div>
    );
  }
}

export default BlogPost;

export const pageQuery = graphql`
  query blogPostQuery($slug: String!) {
    contentfulBlog(slug: { eq: $slug}) {
      title
      slug
    }
  }
`;
