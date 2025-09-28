export default [
  'strapi::errors',
  {
    name: 'strapi::cors',
    config: {
      origin: [
        'http://localhost:3000',
        'https://mv-portfolio-ev9iclyai-mahmouds-projects-7910caab.vercel.app/', // your Vercel domain
      ],
      methods: ['GET','POST','PUT','PATCH','DELETE','OPTIONS'],
      headers: '*',
      keepHeadersOnError: true,
    },
  },
  'strapi::security',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
