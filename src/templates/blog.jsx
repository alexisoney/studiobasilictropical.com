import React from 'react';
import Proptypes from 'prop-types';
import { graphql } from 'gatsby';
import renderHtmlAst from './render-html-ast';

import Layout from '../components/layout';
import Cloudinary from '../components/Cloudinary';
import Logo from '../components/logo';
import Author from '../components/author';

export const BlogLayout = ({
  date, timeToRead, author, title, thumbnail, category, intro, htmlAst, tableOfContents,
}) => {
  const customDate = new Date(date || Date.now()).toLocaleDateString('FR-fr', {
    year: 'numeric', month: 'long', day: 'numeric',
  });

  return (
    <div className="blog-post">
      <div className="blog-post__header-wrapper">
        <div className="blog-post__header-background" />
        <Logo />
        <div className="blog-post__header">
          <div className="blog-post__metadata">
            {customDate && <p className="blog-post__metadata-date">{`Publié le ${customDate}`}</p>}
            {' '}
            <p className="blog-post__metadata-reading-time">
              {`– ${timeToRead} minute${timeToRead > 1 ? 's' : ''} de lecture`}
            </p>
          </div>
          <h1 className="blog-post__title">{title}</h1>
          <Cloudinary className="blog-post__thumbnail" src={thumbnail} alt={title} title={title} lazyload />
        </div>
      </div>
      <div className="blog-post__content">
        <p className="blog-post__category">{category}</p>
        <p className="blog-post__intro">{intro}</p>
        <hr className="blog-post__break" />
        <div className="blog-post__table-of-content-wrapper">
          <div className="blog-post__table-of-content">
            <h2 className="blog-post__table-of-content-title">Au sommaire</h2>
            <div dangerouslySetInnerHTML={{ __html: tableOfContents }} />
          </div>
        </div>
        {htmlAst && renderHtmlAst(htmlAst)}
        <Author author={author} />
      </div>
    </div>
  );
};

BlogLayout.defaultProps = {
  timeToRead: 1,
  date: '',
  title: '',
  thumbnail: '',
  category: '',
  intro: '',
  author: '',
  htmlAst: undefined,
  tableOfContents: '',
};

BlogLayout.propTypes = {
  date: Proptypes.string,
  timeToRead: Proptypes.number,
  title: Proptypes.string,
  thumbnail: Proptypes.string,
  category: Proptypes.string,
  intro: Proptypes.string,
  author: Proptypes.string,
  htmlAst: Proptypes.shape({}),
  tableOfContents: Proptypes.string,
};

const Blog = ({ data }) => {
  const { htmlAst, timeToRead, tableOfContents } = data.markdownRemark;
  const {
    title, slug, date, thumbnail, category, intro, author,
  } = data.markdownRemark.frontmatter;

  const seo = {
    title,
    description: intro,
    slug,
    thumbnail: '',
  };

  return (
    <Layout seo={seo}>
      <BlogLayout
        date={date}
        timeToRead={timeToRead}
        title={title}
        thumbnail={thumbnail}
        category={category}
        intro={intro}
        author={author}
        htmlAst={htmlAst}
        tableOfContents={tableOfContents}
      />
    </Layout>
  );
};

Blog.propTypes = {
  data: Proptypes.shape({
    markdownRemark: Proptypes.shape({
      frontmatter: Proptypes.shape({
        title: Proptypes.string,
        slug: Proptypes.string,
        date: Proptypes.string,
        thumbnail: Proptypes.string,
        category: Proptypes.string,
        intro: Proptypes.string,
        author: Proptypes.string,
      }),
      htmlAst: Proptypes.shape({}),
      timeToRead: Proptypes.number,
      tableOfContents: Proptypes.string,
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        slug
        date
        thumbnail
        category
        author
        intro
      }
      htmlAst
      timeToRead
      tableOfContents(maxDepth: 2, absolute: false)
    }
  }
`;

export default Blog;
