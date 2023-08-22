import { Block } from "payload/types";

const Text: Block = {
  slug: "text",
  labels: {
    singular: "Textblock",
    plural: "Textblöcke",
  },
  interfaceName: "TextBlock",
  fields: [
    {
      name: "alignment",
      type: "radio",
      label: "Ausrichtung",
      defaultValue: "left",
      options: [
        {
          label: "Links",
          value: "left",
        },
        {
          label: "Mitte",
          value: "center",
        },
        {
          label: "Rechts",
          value: "right",
        },
      ],
    },
    {
      name: "text",
      type: "textarea",
      label: "Text",
      required: true,
    },
  ],
};

export default Text;
