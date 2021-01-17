/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';
// import { SEO } from '@studio-basilic-tropical/gatsby-theme-seo';
import SEO from '../components/seo'
import '../styles/styles.scss';

const Layout = ({ children, seo }) => (
  <div className="layout">
    {seo && <SEO {...seo} />}
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  seo: PropTypes.shape({}).isRequired,
};

export default Layout;
