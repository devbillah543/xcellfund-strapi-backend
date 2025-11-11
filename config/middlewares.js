module.exports = [
  'strapi::errors',
  'strapi::security',
  // ...existing middlewares...
  {
    name: 'global::cache',
    config: {
      ttlSeconds: 30 * 24 * 60 * 60
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
