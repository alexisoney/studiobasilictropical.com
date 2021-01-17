import React from 'react';
import { BlogLayout } from '../blog';
import data from './blog.data.json';

export default {
  component: null,
  title: 'Blog',
};

export const BlogPost = () => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <BlogLayout {...data} />
);
