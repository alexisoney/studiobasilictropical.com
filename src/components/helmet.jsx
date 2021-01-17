import React from 'react';
import PropTypes from 'prop-types';
import { Helmet as ReactHelmet } from 'react-helmet';
import joinPath from 'path.join';

const Helmet = ({
  title, description, slug, lang, thumbnail, siteMetadata,
}) => {
  const seo = {
    title: title || siteMetadata.title,
    description: description || siteMetadata.description,
    url: slug && joinPath(siteMetadata.siteUrl, '/', slug),
    thumbnail: thumbnail ? joinPath(siteMetadata.siteUrl, '/', thumbnail) : '',
  };

  return (
    <ReactHelmet
      defer={false}
      htmlAttributes={{
        lang,
      }}
      defaultTitle={siteMetadata.title}
      titleTemplate={seo.title !== siteMetadata.title ? `%s | ${siteMetadata.title}` : ''}
      title={title}
      link={
        seo.url ? [
          {
            rel: 'canonical',
            href: seo.url,
          },
        ] : []
      }
      meta={[
        {
          name: 'description',
          content: seo.description,
        },
        {
          property: 'og:title',
          content: seo.title,
        },
        {
          property: 'og:description',
          content: seo.description,
        },
        {
          property: 'og:url',
          content: seo.url,
        },
        {
          property: 'og:type',
          content: siteMetadata.ogType,
        },
        {
          property: 'og:image',
          content: seo.thumbnail,
        },
        {
          property: 'og:image:secure_url',
          content: seo.thumbnail,
        },
        {
          property: 'og:site_name',
          content: siteMetadata.title,
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:title',
          content: seo.title,
        },
        {
          name: 'twitter:description',
          content: seo.description,
        },
        {
          name: 'twitter:image:alt',
          content: seo.title,
        },
      ]}
    />
  );
};

Helmet.defaultProps = {
  title: '',
  description: '',
  slug: '',
  lang: 'fr',
  thumbnail: '',
  siteMetadata: {
    title: '',
    description: '',
    siteUrl: '',
    ogType: 'website',
  },
};

Helmet.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  slug: PropTypes.string,
  lang: PropTypes.string,
  thumbnail: PropTypes.string,
  siteMetadata: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    siteUrl: PropTypes.string,
    ogType: PropTypes.string,
  }),
};

export default Helmet;
