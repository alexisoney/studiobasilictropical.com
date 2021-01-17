const path = require('path');
const _ = require('lodash');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const query = `
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id,
            frontmatter {
              slug
              template
            }
          }
        }
      }
    }
  `;


  try {
    const result = await graphql(query);

    if (result.errors) {
      reporter.panic('', result.errors[0]);
    }

    const posts = result && result.data && result.data.allMarkdownRemark.edges;

    if (posts) {
      posts.forEach(({ node = {} }) => {
        const slug = node.frontmatter.slug === 'index' ? '/' : _.kebabCase(node.frontmatter.slug);
        const template = _.kebabCase(node.frontmatter.template);

        createPage({
          path: slug,
          component: path.resolve(`src/templates/${String(template)}.jsx`),
          context: { id: node.id },
        });
      });
    }
  } catch (error) {
    reporter.panic('', error);
  }
};
