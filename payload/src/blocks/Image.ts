import { Block } from "payload/types";

const Image: Block = {
  slug: "image",
  labels: {
    singular: "Bildblock",
    plural: "Bildblöcke",
  },
  interfaceName: "ImageBlock",
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
      name: "image",
      type: "upload",
      label: "Bild",
      relationTo: "media",
      required: true,
    },
  ],
};

export default Image;
