/* eslint-disable react/jsx-props-no-spreading */
// import { createConfig } from '@studio-basilic-tropical/gatsby-theme-netlify-cms';
import { createConfig } from '../index';

import Layout from '../../components/layout';
import { IndexLayout } from '../../templates/index';
import { BlogLayout } from '../../templates/blog';

const config = createConfig({
  Layout,
  collections: {
    folder: 'studio-basilic-tropical',
    pages: [
      {
        label: 'Accueil',
        name: 'index',
        preview: IndexLayout,
        fields: [
          { label: 'Titre', name: 'title', widget: 'string' },
          { label: 'Contenu', name: 'body', widget: 'markdown' },
        ],
      },
    ],
    blog: {
      preview: BlogLayout,
      fields: [
        { label: 'Date', name: 'date', widget: 'datetime' },
        { label: 'Image de couverture', name: 'thumbnail', widget: 'image' },
        {
          label: 'Catégorie', name: 'category', widget: 'select', options: ['Design', 'Développement'],
        },
        {
          label: 'Auteur', name: 'author', widget: 'select', options: ['Clémence', 'Alexis'],
        },
        { label: 'Introduction', name: 'intro', widget: 'text' },
        { label: 'Contenu', name: 'body', widget: 'markdown' },
      ],
    },
  },

  media_library: {
    name: 'cloudinary',
    config: {
      cloud_name: 'studio-basilic-tropical',
      api_key: '825253427337331',
    },
  },
});

export default config;
