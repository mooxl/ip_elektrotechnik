import Heading from "@/blocks/Heading";
import Image from "@/blocks/Image";
import Link from "@/blocks/Link";
import Text from "@/blocks/Text";
import { Block } from "payload/types";

const Content: Block = {
  slug: "content",
  labels: {
    singular: "Inhaltsblock",
    plural: "Inhaltsblöcke",
  },
  interfaceName: "ContentBlock",
  fields: [
    {
      type: "row",
      fields: [
        {
          type: "blocks",
          label: "Linke Spalte",
          name: "left",
          blocks: [Heading, Text, Link, Image],
        },
        {
          type: "blocks",
          label: "Rechte Spalte",
          name: "right",
          blocks: [Heading, Text, Link, Image],
        },
      ],
    },
  ],
};

export default Content;
