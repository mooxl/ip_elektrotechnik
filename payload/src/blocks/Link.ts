import { Block } from "payload/types";

const Link: Block = {
  slug: "link",
  labels: {
    singular: "Linkblock",
    plural: "Linkblöcke",
  },
  interfaceName: "LinkBlock",
  fields: [
    {
      name: "type",
      type: "radio",
      label: "Typ",
      required: true,
      defaultValue: "internal",
      options: [
        { label: "Intern", value: "internal" },
        { label: "Extern", value: "external" },
      ],
    },
    {
      name: "link",
      type: "relationship",
      relationTo: "pages",
      admin: {
        condition: (_, data) => {
          return data.type === "internal";
        },
      },
    },
    {
      name: "url",
      type: "text",
      label: "URL",
      admin: {
        condition: (_, data) => data.type === "external",
      },
    },
  ],
};

export default Link;
