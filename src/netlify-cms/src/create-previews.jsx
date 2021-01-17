/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';
import CMS from 'netlify-cms-app';
import { toHtmlAst } from './helpers';

export default ({ collections = [], Layout = null }) => {
  const previews = [];

  collections.forEach((collection) => {
    if (collection.name === 'pages') {
      collection.files.forEach((page) => {
        previews.push({
          name: page.name,
          fields: page.fields.map((field) => field.name),
          Preview: page.preview || null,
        });
      });
    } else {
      previews.push({
        name: collection.name,
        fields: collection.fields.map((field) => field.name),
        Preview: collection.preview || null,
      });
    }
  });

  previews.forEach(({ name, fields, Preview }) => {
    const PreviewComponent = ({ entry }) => {
      const props = {};

      fields.forEach((field) => { if (field !== 'body') props[field] = entry.getIn(['data', field]); });

      if (fields.includes('body')) props.htmlAst = toHtmlAst(entry.getIn(['data', 'body']));

      if (Layout && Preview) {
        return (
          <Layout>
            <Preview {...props} />
          </Layout>
        );
      }
      if (Preview) {
        return <Preview {...props} />;
      }
      return <div>No preview set up.</div>;
    };

    PreviewComponent.propTypes = {
      entry: PropTypes.shape({ getIn: PropTypes.func }).isRequired,
    };

    CMS.registerPreviewTemplate(name, PreviewComponent);
  });
};
