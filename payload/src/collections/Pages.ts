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
      name: "title",
      label: "Titel",
      type: "text",
    },
    {
      name: "description",
      label: "Beschreibung",
      type: "textarea",
    },
    {
      name: "route",
      label: "Pfad",
      type: "text",
      admin: { position: "sidebar", readOnly: true },
      hooks: {
        beforeChange: [
          ({ data }) => {
            if (data && data.breadcrumbs) {
              const route = data!.breadcrumbs.at(-1).url;
              return route === "/null" ? "/" : route;
            }
          },
        ],
      },
    },
    {
      name: "path",
      label: "Breadcrumbs",
      type: "text",
      admin: {
        hidden: true,
      },
      hooks: {
        beforeValidate: [
          ({ data }) => {
            return data.slug
              .replace(/ß/g, "ss")
              .replace(/ü/g, "ue")
              .replace(/ö/g, "oe")
              .replace(/ä/g, "ae")
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
