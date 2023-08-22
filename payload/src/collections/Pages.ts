import Content from "@/blocks/Content";
import { CollectionConfig } from "payload/types";

const Pages: CollectionConfig = {
  slug: "pages",
  labels: {
    singular: "Seite",
    plural: "Seiten",
  },
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "title",
          label: "Titel",
          type: "text",
        },
        {
          name: "order",
          label: "Reihenfolge",
          type: "number",
          defaultValue: 0,
        },
      ],
    },
    {
      name: "description",
      label: "Beschreibung",
      type: "textarea",
    },
    {
      name: "blocks",
      label: "Blöcke",
      type: "blocks",
      blocks: [Content],
    },
    {
      name: "path",
      label: "Pfad",
      type: "text",
      admin: { position: "sidebar", readOnly: true },
      hooks: {
        beforeChange: [
          ({ data }) => {
            if (data && data.breadcrumbs) {
              const path = data!.breadcrumbs.at(-1).url;
              return path === "/null" ? "/" : path;
            }
          },
        ],
      },
    },
    {
      name: "breadcrumbss",
      label: "Breadcrumbs",
      type: "text",
      admin: {
        hidden: true,
      },
      hooks: {
        beforeValidate: [
          ({ data }) => {
            return data.title === "Startseite" ? "" : data.title
              .replace(/ß/g, "ss")
              .replace(/ü/g, "ue")
              .replace(/ö/g, "oe")
              .replace(/ä/g, "ae")
              .replace(/&/g, "und")
              .replace(/,/g, "")
              .replace(/'/g, "")
              .replace(/"/g, "")
              .replace(/\(/g, "")
              .replace(/\)/g, "")
              .replace(/\./g, "")
              .replace(/\?/g, "")
              .replace(/ /g, "-")
              .replace(/[^\w-]+/g, "")
              .replace(/\//g, "-")
              .toLowerCase()
              .replace(/-$/, "")
              .replace(/--/g, "-");
          },
        ],
      },
    },
  ],
  hooks: {
    afterChange: [
      async () => {
        try {
          process.env.NODE_ENV !== "development" &&
            console.log(
              await fetch(
                `https://api.github.com/repos/${process.env.REPOSITORY}/dispatches`,
                {
                  method: "POST",
                  headers: {
                    Accept: "application/vnd.github.everest-preview+json",
                    Authorization: `token ${process.env.TOKEN}`,
                  },
                  body: JSON.stringify({
                    event_type: "payload_update",
                  }),
                },
              ),
            );
        } catch (e) {
          console.log(e);
        }
      },
    ],
  },
};
export default Pages;
