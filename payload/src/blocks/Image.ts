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
      name: "image",
      type: "upload",
      label: "Bild",
      relationTo: "media",
      required: true,
    },
  ],
};

export default Image;
