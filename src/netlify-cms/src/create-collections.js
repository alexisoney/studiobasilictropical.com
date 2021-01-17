import path from 'path';
import { kebabCase } from 'lodash';

export default (config) => {
  const folder = process.env.NODE_ENV === 'development' ? '/src/netlify-cms/' : path.join('sites/', config.folder, '/src/netlify-cms/');
  const collections = [];

  const folderMandatoryFields = [
    {
      label: 'Lien',
      name: 'slug',
      widget: 'string',
      pattern: ['^[a-z0-9]+(-[a-z0-9]+)*$', 'Lettres minuscules, chiffres ou tirets uniquement'],
    },
    { label: 'Titre', name: 'title', widget: 'string' },
  ];

  if (config.pages) {
    const pages = config.pages.map((page) => ({
      ...page,
      file: path.join(folder, 'pages', '/', `${kebabCase(page.name)}.md`),
    }));

    collections.push({
      name: 'pages',
      label: 'Pages',
      files: pages,
    });
  }

  if (config.blog) {
    collections.push({
      name: 'blog',
      label: 'Blog',
      folder: path.join(folder, 'blog'),
      create: true,
      slug: '{{fields.slug}}',
      preview: config.blog.preview,
      fields: [
        ...folderMandatoryFields,
        ...config.blog.fields,
        {
          name: 'template', widget: 'hidden', default: 'blog',
        },
      ],
    });
  }

  if (config.customCollections) {
    config.customCollections.forEach((collection) => {
      collections.push({
        name: collection.name,
        label: collection.label,
        folder: path.join(folder, collection.name),
        create: true,
        slug: '{{fields.slug}}',
        fields: [
          ...folderMandatoryFields,
          ...collection.fields,
          {
            name: 'template', widget: 'hidden', default: collection.name,
          },
        ],
      });
    });
  }

  return collections;
};
