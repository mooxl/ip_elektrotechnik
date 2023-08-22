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
      name: "text",
      type: "textarea",
      label: "Text",
      required: true,
    },
  ],
};

export default Text;
