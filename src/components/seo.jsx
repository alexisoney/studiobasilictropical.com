/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import useSiteMetadata from '../hooks/use-site-metadata';
import Helmet from './helmet';

export default (props) => {
  const siteMetadata = useSiteMetadata();
  return <Helmet {...props} siteMetadata={siteMetadata} />;
};
