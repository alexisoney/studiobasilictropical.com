import creacteCollections from './create-collections';

const createConfig = (config = {}) => ({
  load_config_file: false,

  backend: {
    name: 'git-gateway',
    branch: 'master',
  },

  locale: 'fr',

  publish_mode: 'editorial_workflow',

  media_library: config.media_library,
  media_folder: 'static/images/uploads',
  public_folder: '/images/uploads',

  Layout: config.Layout,

  collections: creacteCollections(config.collections),

  ...config.global,
});

export default createConfig;
