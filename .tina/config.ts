import { defineConfig } from 'tinacms';

export default defineConfig({
  clientId: process.env.TINA_PUBLIC_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },

  media: {
    tina: {
      mediaRoot: '',
      publicFolder: 'public',
    },
  },

  schema: {
    collections: [
      {
        name: 'siteSettings',
        label: 'Site Settings',
        path: 'src/content/site',
        format: 'json',
        ui: {
          allowedActions: { create: false, delete: false },
          router: () => '/',
        },
        fields: [
          {
            type: 'string',
            name: 'heroHeadline',
            label: 'Hero Headline',
            required: true,
          },
          {
            type: 'string',
            name: 'heroTagline',
            label: 'Hero Tagline',
            required: true,
          },
          {
            type: 'string',
            name: 'heroCta',
            label: 'Hero Button Text',
            required: true,
          },
          {
            type: 'string',
            name: 'aboutTitle',
            label: 'About Section Title',
          },
          {
            type: 'string',
            name: 'aboutBody',
            label: 'About Text',
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'string',
            name: 'contactEmail',
            label: 'Contact Email',
          },
          {
            type: 'string',
            name: 'contactLinkedin',
            label: 'LinkedIn URL',
          },
        ],
      },
    ],
  },
});
