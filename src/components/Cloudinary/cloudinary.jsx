/* eslint-disable no-param-reassign */
import React, { useEffect, createRef } from 'react';
import PropTypes from 'prop-types';

import { sliceCloudinarySrc } from './cloudinary-utils';

function lazyloadImage(img) {
  if (img.srcset === '') {
    if (typeof img.dataset.srcset !== 'undefined') {
      img.srcset = img.dataset.srcset;
    }
    if (typeof img.dataset.src !== 'undefined') {
      img.src = img.dataset.src;
    }
  }
}

const Cloudinary = ({
  alt,
  lazyload = true,
  sizes,
  srcset: customSrcSet,
  src,
  wide,
  title,
  className,
  wrapperClassName,
}) => {
  const wrapper = createRef();
  useEffect(() => {
    if (wrapper && wrapper.current && lazyload) {
      const tags = wrapper.current.querySelectorAll('source, img');

      if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
        const lazyImageObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              lazyloadImage(entry.target);
              lazyImageObserver.unobserve(entry.target);
            }
          });
        });

        tags.forEach((tag) => lazyImageObserver.observe(tag));
      } else {
        tags.forEach((tag) => {
          lazyloadImage(tag);
        });
      }
    }
  });

  if (typeof src === 'undefined') {
    return null;
  }

  if (!src.includes('https://res.cloudinary.com/')) {
    return <img className={className} src={src} alt={alt} title={title} />;
  }

  if (wide === true) {
    sizes = '(max-width: 1060px) 100vw, 1060px';
    customSrcSet = [400, 800, 1060, 2120];
  }

  const slicedSrc = sliceCloudinarySrc(src);

  const extensionIndex = src.lastIndexOf('.') + 1;
  const extension = src.slice(extensionIndex);
  const extensionSearchRegex = new RegExp(extension, 'g');

  let defaultSrc = `${slicedSrc[0]}/w_630,q_auto/${slicedSrc[1]}`;
  let lowResolutionSrc = `${slicedSrc[0]}/w_10,q_30,e_blur/${slicedSrc[1]}`;
  if (extension !== 'jpg') {
    defaultSrc = defaultSrc.replace(extensionSearchRegex, 'jpg');
    lowResolutionSrc = lowResolutionSrc.replace(extensionSearchRegex, 'jpg');
  }

  let srcSetList = [];
  if (customSrcSet && customSrcSet.length > 0) {
    customSrcSet.forEach((size) => {
      srcSetList.push(`${slicedSrc[0]}/w_${size},q_auto/${slicedSrc[1]} ${size}w`);
    });
  } else {
    srcSetList = [
      `${slicedSrc[0]}/w_800,q_auto/${slicedSrc[1]} 800w`,
      `${slicedSrc[0]}/w_1200,q_auto/${slicedSrc[1]} 1200w`,
    ];
  }
  const srcSet = srcSetList.join(',');
  const jpgSrcSet = extension === 'jpg' ? srcSet : srcSet.replace(extensionSearchRegex, 'jpg');
  const wepbSrcSet = srcSet.replace(extensionSearchRegex, 'webp');

  return (
    <picture ref={wrapper} className={wrapperClassName}>
      <source
        type="image/webp"
        sizes={sizes}
        data-srcset={wepbSrcSet}
        srcSet={lazyload ? null : wepbSrcSet}
      />
      <img
        className={className}
        alt={alt}
        src={lazyload ? lowResolutionSrc : defaultSrc}
        srcSet={lazyload ? null : jpgSrcSet}
        sizes={sizes}
        data-src={defaultSrc}
        data-srcset={jpgSrcSet}
        title={title}
      />
    </picture>
  );
};

Cloudinary.defaultProps = {
  alt: '',
  title: '',
  lazyload: false,
  sizes: '(max-width: 600px) 100vw, 600px',
  srcset: [],
  src: '',
  wide: false,
  className: '',
  wrapperClassName: '',
};

Cloudinary.propTypes = {
  alt: PropTypes.string,
  title: PropTypes.string,
  lazyload: PropTypes.bool,
  sizes: PropTypes.string,
  srcset: PropTypes.arrayOf(PropTypes.string),
  src: PropTypes.string,
  wide: PropTypes.bool,
  className: PropTypes.string,
  wrapperClassName: PropTypes.string,
};

export default Cloudinary;
