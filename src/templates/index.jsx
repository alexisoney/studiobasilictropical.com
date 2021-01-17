import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Cloudinary from '../components/Cloudinary';
import Logo from '../components/logo';
// import renderHtmlAst from './render-html-ast';

import Layout from '../components/layout';

export const IndexLayout = ({
  // title, htmlAst, posts,
  posts,
}) => (
  <div className="home">
    <div className="home__header">
      <div className="home__header-background" />
      <Logo />
    </div>
    {/* <h1>{title}</h1> */}

    {/* {htmlAst && renderHtmlAst(htmlAst)} */}

    {posts && posts.map(({ node }) => {
      const { title: postTitle, slug, thumbnail } = node.frontmatter;
      return (
        <div className="home__post" key={node.id}>
          <Cloudinary src={thumbnail} />
          <h2 className="home__title">
            <a className="home__title-link" href={`/${slug}`}>{postTitle}</a>

          </h2>
        </div>
      );
    })}
  </div>
);

IndexLayout.defaultProps = {
  htmlAst: undefined,
  posts: [],
};

IndexLayout.propTypes = {
  // title: PropTypes.string.isRequired,
  htmlAst: PropTypes.shape({}),
  posts: PropTypes.arrayOf(PropTypes.object),
};

const Index = ({ data }) => {
  const { htmlAst } = data.markdownRemark;
  const { title } = data.markdownRemark.frontmatter;
  const posts = data.allMarkdownRemark && data.allMarkdownRemark.edges;

  const seo = {
    title,
    description: '',
    slug: '',
    thumbnail: '',
  };

  return (
    <Layout seo={seo}>
      <IndexLayout title={title} htmlAst={htmlAst} posts={posts} />
    </Layout>
  );
};

Index.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      htmlAst: PropTypes.shape({}),
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        slug: PropTypes.string,
        thumbnail: PropTypes.string,
      }),
    }),
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({})),
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
      htmlAst
    }
    allMarkdownRemark(filter: {frontmatter: {template: {eq: "blog"}}}, sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          id
          frontmatter {
            slug
            title
            thumbnail
          }
        }
      }
    }
  }
`;

export default Index;
