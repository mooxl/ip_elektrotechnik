import Content from "@/blocks/Content";
import FAQ from "@/blocks/FAQ";
import Heading from "@/blocks/Heading";
import { CollectionConfig } from "payload/types";
const Posts: CollectionConfig = {
  slug: "posts",
  labels: {
    singular: "Blogeintrag",
    plural: "Blogeinträge",
  },
  admin: {
    defaultColumns: ["title", "author", "status"],
    useAsTitle: "title",
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
  },

  fields: [
    {
      name: "title",
      label: "Titel",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "description",
      label: "Beschreibung",
      type: "text",
      required: true,
    },
    {
      name: "publishedDate",
      label: "Veröffentlichungsdatum",
      type: "date",
      required: true,
    },
    {
      name: "content",
      type: "blocks",
      label: "Inhalt",
      required: true,
      blocks: [Content, Heading, FAQ],
    },
    {
      name: "path",
      label: "Breadcrumbs",
      type: "text",
      admin: {
        position: "sidebar",
        readOnly: true,
      },
      hooks: {
        beforeChange: [
          ({ data }) => {
            return "/blog/" + data.title
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

export default Posts;
