import Heading from "@/blocks/Heading";
import Image from "@/blocks/Image";
import Link from "@/blocks/Link";
import Text from "@/blocks/Text";
import Youtube from "@/blocks/Youtube";
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
          blocks: [Heading, Text, Link, Image, Youtube],
        },
        {
          type: "blocks",
          label: "Rechte Spalte",
          name: "right",
          blocks: [Heading, Text, Link, Image, Youtube],
        },
      ],
    },
  ],
};

export default Content;
