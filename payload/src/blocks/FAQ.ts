import { Block } from "payload/types";

const FAQ: Block = {
  slug: "FAQ",
  labels: {
    singular: "FAQblock",
    plural: "FAQblöcke",
  },
  interfaceName: "FAQBlock",
  fields: [
    {
      type: "array",
      name: "faq",
      label: "FAQ",
      fields: [
        { type: "text", name: "question", label: "Frage", required: true },
        { type: "textarea", name: "answer", label: "Antwort", required: true },
      ],
    },
  ],
};

export default FAQ;
