/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import RehypeReact from 'rehype-react';
import Cloudinary from '../components/Cloudinary';

const Image = ({ alt, src, title }) => (
  <Cloudinary
    alt={alt}
    src={src}
    title={title}
    lazyload
    className="blog-post__image"
  />
);

const renderHtmlAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    img: Image,
  },
}).Compiler;

export default renderHtmlAst;
