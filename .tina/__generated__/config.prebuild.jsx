// .tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  clientId: process.env.TINA_PUBLIC_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  branch: process.env.GITHUB_REF_NAME || process.env.TINA_BRANCH || "main",
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "siteSettings",
        label: "Site Settings",
        path: "src/content/site",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false }
        },
        fields: [
          {
            type: "string",
            name: "heroHeadline",
            label: "Hero Headline",
            required: true
          },
          {
            type: "string",
            name: "heroTagline",
            label: "Hero Tagline",
            required: true
          },
          {
            type: "string",
            name: "heroCta",
            label: "Hero Button Text",
            required: true
          },
          {
            type: "string",
            name: "aboutTitle",
            label: "About Section Title"
          },
          {
            type: "string",
            name: "aboutBody",
            label: "About Text",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "object",
            name: "credentials",
            label: "Credentials Strip",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.stat })
            },
            fields: [
              { type: "string", name: "stat", label: "Stat / Title" },
              { type: "string", name: "label", label: "Description" }
            ]
          },
          {
            type: "string",
            name: "servicesTitle",
            label: "Services Section Title"
          },
          {
            type: "string",
            name: "hrConsultingDesc",
            label: "HR Consulting Description",
            ui: { component: "textarea" }
          },
          {
            type: "string",
            name: "c2cDesc",
            label: "Class to Corporate Description",
            ui: { component: "textarea" }
          },
          {
            type: "string",
            name: "contactEmail",
            label: "Contact Email"
          },
          {
            type: "string",
            name: "contactLinkedin",
            label: "LinkedIn URL"
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
